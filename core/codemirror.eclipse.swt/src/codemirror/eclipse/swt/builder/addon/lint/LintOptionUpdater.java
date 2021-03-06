package codemirror.eclipse.swt.builder.addon.lint;

import codemirror.eclipse.swt.builder.AbstractOptionUpdater;
import codemirror.eclipse.swt.builder.Options;

public class LintOptionUpdater extends AbstractOptionUpdater {

	private static final String[] LINT_JS = { "scripts/codemirror/addon/lint/lint.js" };
	private static final String[] LINT_CSS = { "scripts/codemirror/addon/lint/lint.css" };

	private static final LintOptionUpdater INSTANCE = new LintOptionUpdater();

	public static LintOptionUpdater getInstance() {
		return INSTANCE;
	}

	public LintOption getLint(Options options, LintImpl lintImpl) {
		LintOption lintWith = (LintOption) options.get("lintWith");
		if (lintWith == null) {
			// add lint.js + lint.css
			super.install(options.getBuilder(), LINT_JS, LINT_CSS);
			// add implementation of lint
			if (lintImpl != null) {
				lintImpl.install(options.getBuilder());
			}
			lintWith = new LintOption(options.getBuilder());
			options.addOption("lintWith", lintWith);
		}
		return lintWith;
	}

}
