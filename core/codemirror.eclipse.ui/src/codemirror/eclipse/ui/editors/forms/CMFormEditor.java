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
package codemirror.eclipse.ui.editors.forms;

import org.eclipse.jface.action.IToolBarManager;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IEditorSite;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.forms.editor.FormEditor;
import org.eclipse.ui.forms.editor.IFormPage;

import codemirror.eclipse.swt.CMControl;
import codemirror.eclipse.swt.ICMControlProvider;
import codemirror.eclipse.swt.search.IFindReplaceTarget;

public abstract class CMFormEditor extends FormEditor implements
		ICMControlProvider {

	private CMFormPage cmPage;

	public void contributeToToolbar(IToolBarManager manager) {

	}

	@Override
	public void init(IEditorSite site, IEditorInput input)
			throws PartInitException {
		super.init(site, input);
		super.setPartName(input.getName());
	}

	@Override
	public void setFocus() {
		super.setFocus();
		IFormPage page = getActivePageInstance();
		if (page != null) {
			page.setFocus();
		}
	}

	@Override
	public Object getAdapter(Class adapter) {
		if (adapter == IFindReplaceTarget.class) {
			return getCM();
		}
		return super.getAdapter(adapter);
	}

	public int addPage(CMFormPage page) throws PartInitException {
		this.cmPage = page;
		return super.addPage(page);
	}

	public CMControl getCM() {
		if (cmPage != null) {
			return cmPage.getCM();
		}
		return null;
	}
}
