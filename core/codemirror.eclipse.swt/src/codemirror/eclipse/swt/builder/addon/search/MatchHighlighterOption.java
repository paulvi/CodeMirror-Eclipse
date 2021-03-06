package codemirror.eclipse.swt.builder.addon.search;

import java.util.Collection;

import codemirror.eclipse.swt.builder.BaseOptions;
import codemirror.eclipse.swt.builder.CMBuilder;
import codemirror.eclipse.swt.builder.Function;

public class MatchHighlighterOption extends BaseOptions {

	public MatchHighlighterOption(CMBuilder builder) {
		super(builder);
	}

	@Override
	protected boolean isOneOption() {
		return false;
	}

	public void setShowToken(String showToken) {
		super.addOption("showToken", new Function(showToken));
	}

	public void setShowTokenTypes(Collection<ShowTokenType> tokenTypes) {
		super.addOption("showTokenTypes", tokenTypes);
	}
}
