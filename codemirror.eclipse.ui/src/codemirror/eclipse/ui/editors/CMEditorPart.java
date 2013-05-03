/*******************************************************************************
 * Copyright (c) 2011 Angelo ZERR.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:      
 *     Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *******************************************************************************/
package codemirror.eclipse.ui.editors;

import java.io.File;
import java.io.IOException;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.jface.dialogs.ErrorDialog;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IEditorSite;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.part.EditorPart;

import codemirror.eclipse.swt.CMControl;
import codemirror.eclipse.ui.internal.CMEditorPartHelper;

public abstract class CMEditorPart extends EditorPart implements ICMEditorPart {

	private CMControl cm;
	private final String url;

	public CMEditorPart(File file) {
		this(CMControl.toURL(file));
	}

	public CMEditorPart(String url) {
		this.url = url;
	}

	@Override
	public void doSave(IProgressMonitor monitor) {
		CMEditorPartHelper.saveCM(this, monitor);
	}

	@Override
	public void doSaveAs() {
		// Do nothing
	}

	@Override
	public boolean isSaveAsAllowed() {
		return false;
	}

	@Override
	public void init(IEditorSite site, IEditorInput input)
			throws PartInitException {
		setSite(site);
		setInput(input);
		setPartName(input.getName());
	}

	@Override
	public boolean isDirty() {
		return cm.isDirty();
	}

	@Override
	public void createPartControl(Composite parent) {
		this.cm = CMEditorPartHelper.createCM(this, parent);
	}

	@Override
	public void setFocus() {
		cm.setFocus();
	}

	/**
	 * Presents an error dialog to the user when a problem happens during save.
	 * <p>
	 * Subclasses can decide to override the given title and message.
	 * </p>
	 * 
	 * @param title
	 *            the dialog title
	 * @param message
	 *            the message to display
	 * @param exception
	 *            the exception to handle
	 * @since 3.3
	 */
	protected void openSaveErrorDialog(String title, String message,
			CoreException exception) {
		ErrorDialog.openError(getSite().getShell(), title, message,
				exception.getStatus());
	}

	public void editorDirtyStateChanged() {
		firePropertyChange(PROP_DIRTY);
	}

	public CMControl getCMControl() {
		return cm;
	}

	public CMControl createCM(String url, Composite parent, int style) {
		return new CMControl(url, parent, style);
	}

	public String getURL() {
		return url;
	}

	public String loadCM() throws IOException, CoreException {
		return CMEditorPartHelper.getOperation(getEditorInput()).loadCM(
				getEditorInput());
	}

	public void saveCM(String text, IProgressMonitor monitor)
			throws IOException, CoreException {
		CMEditorPartHelper.getOperation(getEditorInput()).saveCM(text,
				getEditorInput(), monitor);
	}
}
