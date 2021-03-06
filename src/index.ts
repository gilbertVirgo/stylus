import _ from "lodash";

export const array: string[] = [
    "align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "azimuth", "backface-visibility", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "background", "bleed", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-bottom", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-source", "border-image-slice", "border-image-width", "border-left-color", "border-left-style", "border-left-width", "border-left", "border-radius", "border-right-color", "border-right-style", "border-right-width", "border-right", "border-spacing", "border-style", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-top", "border-width", "border", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "color", "columns", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "content", "counter-increment", "counter-reset", "cue-after", "cue-before", "cue", "cursor", "direction", "display", "elevation", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "font-feature-settings", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font-family", "font-kerning", "font-language-override", "font-size-adjust", "font-size", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "font", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-column", "grid-gap", "grid-row-end", "grid-row-gap", "grid-row-start", "grid-row", "grid-template-areas", "grid-template-columns", "grid-template-rows", "grid-template", "grid", "hanging-punctuation", "height", "hyphens", "isolation", "justify-content", "justify-items", "justify-self", "left", "letter-spacing", "line-break", "line-height", "list-style-image", "list-style-position", "list-style-type", "list-style", "margin-bottom", "margin-left", "margin-right", "margin-top", "margin", "marker-offset", "marks", "max-height", "max-width", "min-height", "min-width", "mix-blend-mode", "nav-up", "nav-down", "nav-left", "nav-right", "opacity", "order", "orphans", "outline-color", "outline-offset", "outline-style", "outline-width", "outline", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding-bottom", "padding-left", "padding-right", "padding-top", "padding", "page-break-after", "page-break-before", "page-break-inside", "page", "pause-after", "pause-before", "pause", "perspective", "perspective-origin", "pitch-range", "pitch", "place-content", "place-items", "place-self", "play-during", "position", "quotes", "resize", "rest-after", "rest-before", "rest", "richness", "right", "size", "speak-header", "speak-numeral", "speak-punctuation", "speak", "speech-rate", "stress", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-style", "text-indent", "text-overflow", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "z-index", "alignContent", "alignItems", "alignSelf", "animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction", "backfaceVisibility", "backgroundAttachment", "backgroundBlendMode", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPosition", "backgroundRepeat", "backgroundSize", "borderBottomColor", "borderBottomLeftRadius", "borderBottomRightRadius", "borderBottomStyle", "borderBottomWidth", "borderBottom", "borderCollapse", "borderColor", "borderImage", "borderImageOutset", "borderImageRepeat", "borderImageSource", "borderImageSlice", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderLeft", "borderRadius", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderRight", "borderSpacing", "borderStyle", "borderTopColor", "borderTopLeftRadius", "borderTopRightRadius", "borderTopStyle", "borderTopWidth", "borderTop", "borderWidth", "boxDecorationBreak", "boxShadow", "boxSizing", "breakAfter", "breakBefore", "breakInside", "captionSide", "caretColor", "columnCount", "columnFill", "columnGap", "columnRule", "columnRuleColor", "columnRuleStyle", "columnRuleWidth", "columnSpan", "columnWidth", "counterIncrement", "counterReset", "cueAfter", "cueBefore", "emptyCells", "flexBasis", "flexDirection", "fontFeatureSettings", "flexFlow", "flexGrow", "flexShrink", "flexWrap", "fontFamily", "fontKerning", "fontLanguageOverride", "fontSizeAdjust", "fontSize", "fontStretch", "fontStyle", "fontSynthesis", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "gridArea", "gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridColumnEnd", "gridColumnGap", "gridColumnStart", "gridColumn", "gridGap", "gridRowEnd", "gridRowGap", "gridRowStart", "gridRow", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows", "gridTemplate", "hangingPunctuation", "justifyContent", "justifyItems", "justifySelf", "letterSpacing", "lineBreak", "lineHeight", "listStyleImage", "listStylePosition", "listStyleType", "listStyle", "marginBottom", "marginLeft", "marginRight", "marginTop", "markerOffset", "maxHeight", "maxWidth", "minHeight", "minWidth", "mixBlendMode", "navUp", "navDown", "navLeft", "navRight", "outlineColor", "outlineOffset", "outlineStyle", "outlineWidth", "overflowWrap", "overflowX", "overflowY", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "pageBreakAfter", "pageBreakBefore", "pageBreakInside", "pauseAfter", "pauseBefore", "perspectiveOrigin", "pitchRange", "placeContent", "placeItems", "placeSelf", "playDuring", "restAfter", "restBefore", "speakHeader", "speakNumeral", "speakPunctuation", "speechRate", "tabSize", "tableLayout", "textAlign", "textAlignLast", "textDecoration", "textDecorationColor", "textDecorationLine", "textDecorationSkip", "textDecorationStyle", "textIndent", "textOverflow", "textShadow", "textTransform", "textUnderlinePosition", "transformOrigin", "transformStyle", "transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction", "unicodeBidi", "verticalAlign", "voiceBalance", "voiceDuration", "voiceFamily", "voicePitch", "voiceRange", "voiceRate", "voiceStress", "voiceVolume", "whiteSpace", "willChange", "wordBreak", "wordSpacing", "wordWrap", "zIndex"
];

export interface all {
    "align-content"?: string,
    "align-items"?: string,
    "align-self"?: string,
    "all"?: string,
    "animation"?: string,
    "animation-delay"?: string,
    "animation-direction"?: string,
    "animation-duration"?: string,
    "animation-fill-mode"?: string,
    "animation-iteration-count"?: string,
    "animation-name"?: string,
    "animation-play-state"?: string,
    "animation-timing-function"?: string,
    "azimuth"?: string,
    "backface-visibility"?: string,
    "background-attachment"?: string,
    "background-blend-mode"?: string,
    "background-clip"?: string,
    "background-color"?: string,
    "background-image"?: string,
    "background-origin"?: string,
    "background-position"?: string,
    "background-repeat"?: string,
    "background-size"?: string,
    "background"?: string,
    "bleed"?: string,
    "border-bottom-color"?: string,
    "border-bottom-left-radius"?: string,
    "border-bottom-right-radius"?: string,
    "border-bottom-style"?: string,
    "border-bottom-width"?: string,
    "border-bottom"?: string,
    "border-collapse"?: string,
    "border-color"?: string,
    "border-image"?: string,
    "border-image-outset"?: string,
    "border-image-repeat"?: string,
    "border-image-source"?: string,
    "border-image-slice"?: string,
    "border-image-width"?: string,
    "border-left-color"?: string,
    "border-left-style"?: string,
    "border-left-width"?: string,
    "border-left"?: string,
    "border-radius"?: string,
    "border-right-color"?: string,
    "border-right-style"?: string,
    "border-right-width"?: string,
    "border-right"?: string,
    "border-spacing"?: string,
    "border-style"?: string,
    "border-top-color"?: string,
    "border-top-left-radius"?: string,
    "border-top-right-radius"?: string,
    "border-top-style"?: string,
    "border-top-width"?: string,
    "border-top"?: string,
    "border-width"?: string,
    "border"?: string,
    "bottom"?: string,
    "box-decoration-break"?: string,
    "box-shadow"?: string,
    "box-sizing"?: string,
    "break-after"?: string,
    "break-before"?: string,
    "break-inside"?: string,
    "caption-side"?: string,
    "caret-color"?: string,
    "clear"?: string,
    "clip"?: string,
    "color"?: string,
    "columns"?: string,
    "column-count"?: string,
    "column-fill"?: string,
    "column-gap"?: string,
    "column-rule"?: string,
    "column-rule-color"?: string,
    "column-rule-style"?: string,
    "column-rule-width"?: string,
    "column-span"?: string,
    "column-width"?: string,
    "content"?: string,
    "counter-increment"?: string,
    "counter-reset"?: string,
    "cue-after"?: string,
    "cue-before"?: string,
    "cue"?: string,
    "cursor"?: string,
    "direction"?: string,
    "display"?: string,
    "elevation"?: string,
    "empty-cells"?: string,
    "filter"?: string,
    "flex"?: string,
    "flex-basis"?: string,
    "flex-direction"?: string,
    "font-feature-settings"?: string,
    "flex-flow"?: string,
    "flex-grow"?: string,
    "flex-shrink"?: string,
    "flex-wrap"?: string,
    "float"?: string,
    "font-family"?: string,
    "font-kerning"?: string,
    "font-language-override"?: string,
    "font-size-adjust"?: string,
    "font-size"?: string,
    "font-stretch"?: string,
    "font-style"?: string,
    "font-synthesis"?: string,
    "font-variant"?: string,
    "font-variant-alternates"?: string,
    "font-variant-caps"?: string,
    "font-variant-east-asian"?: string,
    "font-variant-ligatures"?: string,
    "font-variant-numeric"?: string,
    "font-variant-position"?: string,
    "font-weight"?: string,
    "font"?: string,
    "grid-area"?: string,
    "grid-auto-columns"?: string,
    "grid-auto-flow"?: string,
    "grid-auto-rows"?: string,
    "grid-column-end"?: string,
    "grid-column-gap"?: string,
    "grid-column-start"?: string,
    "grid-column"?: string,
    "grid-gap"?: string,
    "grid-row-end"?: string,
    "grid-row-gap"?: string,
    "grid-row-start"?: string,
    "grid-row"?: string,
    "grid-template-areas"?: string,
    "grid-template-columns"?: string,
    "grid-template-rows"?: string,
    "grid-template"?: string,
    "grid"?: string,
    "hanging-punctuation"?: string,
    "height"?: string,
    "hyphens"?: string,
    "isolation"?: string,
    "justify-content"?: string,
    "justify-items"?: string,
    "justify-self"?: string,
    "left"?: string,
    "letter-spacing"?: string,
    "line-break"?: string,
    "line-height"?: string,
    "list-style-image"?: string,
    "list-style-position"?: string,
    "list-style-type"?: string,
    "list-style"?: string,
    "margin-bottom"?: string,
    "margin-left"?: string,
    "margin-right"?: string,
    "margin-top"?: string,
    "margin"?: string,
    "marker-offset"?: string,
    "marks"?: string,
    "max-height"?: string,
    "max-width"?: string,
    "min-height"?: string,
    "min-width"?: string,
    "mix-blend-mode"?: string,
    "nav-up"?: string,
    "nav-down"?: string,
    "nav-left"?: string,
    "nav-right"?: string,
    "opacity"?: string,
    "order"?: string,
    "orphans"?: string,
    "outline-color"?: string,
    "outline-offset"?: string,
    "outline-style"?: string,
    "outline-width"?: string,
    "outline"?: string,
    "overflow"?: string,
    "overflow-wrap"?: string,
    "overflow-x"?: string,
    "overflow-y"?: string,
    "padding-bottom"?: string,
    "padding-left"?: string,
    "padding-right"?: string,
    "padding-top"?: string,
    "padding"?: string,
    "page-break-after"?: string,
    "page-break-before"?: string,
    "page-break-inside"?: string,
    "page"?: string,
    "pause-after"?: string,
    "pause-before"?: string,
    "pause"?: string,
    "perspective"?: string,
    "perspective-origin"?: string,
    "pitch-range"?: string,
    "pitch"?: string,
    "place-content"?: string,
    "place-items"?: string,
    "place-self"?: string,
    "play-during"?: string,
    "position"?: string,
    "quotes"?: string,
    "resize"?: string,
    "rest-after"?: string,
    "rest-before"?: string,
    "rest"?: string,
    "richness"?: string,
    "right"?: string,
    "size"?: string,
    "speak-header"?: string,
    "speak-numeral"?: string,
    "speak-punctuation"?: string,
    "speak"?: string,
    "speech-rate"?: string,
    "stress"?: string,
    "tab-size"?: string,
    "table-layout"?: string,
    "text-align"?: string,
    "text-align-last"?: string,
    "text-decoration"?: string,
    "text-decoration-color"?: string,
    "text-decoration-line"?: string,
    "text-decoration-skip"?: string,
    "text-decoration-style"?: string,
    "text-indent"?: string,
    "text-overflow"?: string,
    "text-shadow"?: string,
    "text-transform"?: string,
    "text-underline-position"?: string,
    "top"?: string,
    "transform"?: string,
    "transform-origin"?: string,
    "transform-style"?: string,
    "transition"?: string,
    "transition-delay"?: string,
    "transition-duration"?: string,
    "transition-property"?: string,
    "transition-timing-function"?: string,
    "unicode-bidi"?: string,
    "vertical-align"?: string,
    "visibility"?: string,
    "voice-balance"?: string,
    "voice-duration"?: string,
    "voice-family"?: string,
    "voice-pitch"?: string,
    "voice-range"?: string,
    "voice-rate"?: string,
    "voice-stress"?: string,
    "voice-volume"?: string,
    "volume"?: string,
    "white-space"?: string,
    "widows"?: string,
    "width"?: string,
    "will-change"?: string,
    "word-break"?: string,
    "word-spacing"?: string,
    "word-wrap"?: string,
    "z-index"?: string
}

export const parse = (props: object) => {
    const style = {}

    // Inline gets priority
    Object.keys(props).forEach(key => {
        const cc = _.camelCase(key);
        if (array.includes(cc)) {
            style[cc] = props[key];
        }
    });

    return style;
}