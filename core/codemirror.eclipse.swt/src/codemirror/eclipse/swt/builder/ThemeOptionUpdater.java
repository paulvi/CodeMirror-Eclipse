package codemirror.eclipse.swt.builder;

public class ThemeOptionUpdater extends AbstractOptionUpdater {

	private static final ThemeOptionUpdater INSTANCE = new ThemeOptionUpdater();

	public static ThemeOptionUpdater getInstance() {
		return INSTANCE;
	}

	public void setTheme(Options options, Theme theme) {
		if (theme == null) {
			Theme oldTheme = Theme.getTheme((String) options.get("theme"));
			if (oldTheme != null) {
				removeTheme(options.getBuilder(), oldTheme);
			}
			options.removeOption("theme");
		} else {
			// add the CSS
			setTheme(options.getBuilder(), theme);
			// set theme to the options
			options.addOption("theme", theme.getName());
		}
	}

	public void setTheme(AbstractCMBuilder builder, Theme theme) {
		// add the CSS
		builder.addStyle(theme.getStyle());
	}

	public void removeTheme(AbstractCMBuilder builder, Theme theme) {
		// add the CSS
		builder.removeStyle(theme.getStyle());
	}

}
