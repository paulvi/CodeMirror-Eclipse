/*******************************************************************************
 * Copyright (c) 2013 Angelo ZERR.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:      
 *     Angelo Zerr <angelo.zerr@gmail.com> - initial API and implementation
 *******************************************************************************/
package codemirror.eclipse.ui.xml.preferences;

import org.eclipse.ui.IWorkbench;

import codemirror.eclipse.ui.preferences.CMEditorPreferencePage;
import codemirror.eclipse.ui.xml.internal.Messages;

/**
 * XML editor preference page.
 * 
 */
public class XMLEditorPreferencePage extends CMEditorPreferencePage {

	public void init(IWorkbench workbench) {
		setDescription(Messages.XMLEditorPreferencePage_description);
	}

}
