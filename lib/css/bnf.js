"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const bnf = `

    stylesheet                 ::= ( media | ruleSet | keyframes | declaration | error )+ ;


    media                      ::= "@media" mediaQueries "{" ( ruleSet | declaration )* "}" ;
                                     
                                                              
    ruleSet                    ::=  selectors "{" declaration* "}" ;
    
    
    keyframes                  ::= "@keyframes" [identifier] "{" keyframe+ "}" ;
                                     
                                                              
    declaration                ::=  propertyName ":" propertyValues important? ";" ;


    error.                     ::=  . ;


    propertyValues             ::=  propertyValue ( "," propertyValue )* ;


    mediaQueries               ::=  mediaQuery ( ( "," | "or" ) mediaQuery )* ;
                                                              
                                                              
    selectors                  ::=  selector ( "," selector )* ;


    keyframe                   ::=  [percentage] "{" declaration+ "}" ;
    
    
    mediaQuery                 ::=  ( "not"? mediaType "and" )? mediaFeatures 
    
                                 |  "not"? mediaType
                                 
                                 ;


    mediaType                  ::=  "all" | "print" | "screen" | "speech" ;
                                                              
                                                              
    mediaFeatures              ::=  ( 
    
                                      mediaFeature 
                                      
                                      | 
                                      
                                      ( "(" "not" mediaFeature ")" ) 
                                      
                                    ) 
    
                                    ( 
                                    
                                      "and" 
                                    
                                      ( 
                                      
                                        mediaFeature 
                                        
                                        | 
                                        
                                        ( "(" "not" mediaFeature ")" ) 
                                        
                                      ) 
                                      
                                    )* 
                                    
                                 ;


    mediaFeature               ::=  "(" [identifier] ( ":" propertyValue )? ")" ;


    propertyValue              ::=  term ( ","? term )* ;


    propertyName               ::=  [identifier] ;


    important                  ::=  "!important" ;


    selector                   ::=  ( class | pseudoClass | pseudoElement | attribute )+ ;


    class                      ::=  "."<NO_WHITESPACE>[identifier] parenthesisedSelector? ;


    pseudoClass                ::=  ":"<NO_WHITESPACE>[identifier] parenthesisedSelector? ;


    pseudoElement              ::=  "::"<NO_WHITESPACE>[identifier] parenthesisedSelector? ;


    parenthesisedSelector      ::=  <NO_WHITESPACE>"(" selector <NO_WHITESPACE>")" ;


    attribute                  ::=  "["

                                       [identifier]

                                       (

                                         ( "=" | "~=" | "|=" )

                                         ( [identifier] | [string-literal] )

                                       )?

                                    "]"

                                 ;


    term                       ::=  [plus-or-minus]?
                                                       
                                    (
                                                     
                                      ( [percentage] | [frequency] | [fraction] | [length] | [angle] | [rems] | [ems] | [time] | [number] )
                                                     
                                      |
                                                     
                                      uri
                                                     
                                      |
                                                     
                                      function
                                                     
                                      |
                                                     
                                      [string-literal]+
                                                     
                                      |
                                                     
                                      [identifier]
                                                     
                                      |
                                                     
                                      [colour]
                                                     
                                    )
                                                       
                                 ;


    uri                        ::=  "url"<NO_WHITESPACE>"(" [string-literal] ")" ;


    function                   ::=  [identifier]<NO_WHITESPACE>"(" propertyValue ")" ;

`;
const _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jc3MvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgICBzdHlsZXNoZWV0ICAgICAgICAgICAgICAgICA6Oj0gKCBtZWRpYSB8IHJ1bGVTZXQgfCBrZXlmcmFtZXMgfCBkZWNsYXJhdGlvbiB8IGVycm9yICkrIDtcblxuXG4gICAgbWVkaWEgICAgICAgICAgICAgICAgICAgICAgOjo9IFwiQG1lZGlhXCIgbWVkaWFRdWVyaWVzIFwie1wiICggcnVsZVNldCB8IGRlY2xhcmF0aW9uICkqIFwifVwiIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgcnVsZVNldCAgICAgICAgICAgICAgICAgICAgOjo9ICBzZWxlY3RvcnMgXCJ7XCIgZGVjbGFyYXRpb24qIFwifVwiIDtcbiAgICBcbiAgICBcbiAgICBrZXlmcmFtZXMgICAgICAgICAgICAgICAgICA6Oj0gXCJAa2V5ZnJhbWVzXCIgW2lkZW50aWZpZXJdIFwie1wiIGtleWZyYW1lKyBcIn1cIiA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGRlY2xhcmF0aW9uICAgICAgICAgICAgICAgIDo6PSAgcHJvcGVydHlOYW1lIFwiOlwiIHByb3BlcnR5VmFsdWVzIGltcG9ydGFudD8gXCI7XCIgO1xuXG5cbiAgICBlcnJvci4gICAgICAgICAgICAgICAgICAgICA6Oj0gIC4gO1xuXG5cbiAgICBwcm9wZXJ0eVZhbHVlcyAgICAgICAgICAgICA6Oj0gIHByb3BlcnR5VmFsdWUgKCBcIixcIiBwcm9wZXJ0eVZhbHVlICkqIDtcblxuXG4gICAgbWVkaWFRdWVyaWVzICAgICAgICAgICAgICAgOjo9ICBtZWRpYVF1ZXJ5ICggKCBcIixcIiB8IFwib3JcIiApIG1lZGlhUXVlcnkgKSogO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgc2VsZWN0b3JzICAgICAgICAgICAgICAgICAgOjo9ICBzZWxlY3RvciAoIFwiLFwiIHNlbGVjdG9yICkqIDtcblxuXG4gICAga2V5ZnJhbWUgICAgICAgICAgICAgICAgICAgOjo9ICBbcGVyY2VudGFnZV0gXCJ7XCIgZGVjbGFyYXRpb24rIFwifVwiIDtcbiAgICBcbiAgICBcbiAgICBtZWRpYVF1ZXJ5ICAgICAgICAgICAgICAgICA6Oj0gICggXCJub3RcIj8gbWVkaWFUeXBlIFwiYW5kXCIgKT8gbWVkaWFGZWF0dXJlcyBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwibm90XCI/IG1lZGlhVHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICAgIG1lZGlhVHlwZSAgICAgICAgICAgICAgICAgIDo6PSAgXCJhbGxcIiB8IFwicHJpbnRcIiB8IFwic2NyZWVuXCIgfCBcInNwZWVjaFwiIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIG1lZGlhRmVhdHVyZXMgICAgICAgICAgICAgIDo6PSAgKCBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWFGZWF0dXJlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggXCIoXCIgXCJub3RcIiBtZWRpYUZlYXR1cmUgXCIpXCIgKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFuZFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhRmVhdHVyZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggXCIoXCIgXCJub3RcIiBtZWRpYUZlYXR1cmUgXCIpXCIgKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICBtZWRpYUZlYXR1cmUgICAgICAgICAgICAgICA6Oj0gIFwiKFwiIFtpZGVudGlmaWVyXSAoIFwiOlwiIHByb3BlcnR5VmFsdWUgKT8gXCIpXCIgO1xuXG5cbiAgICBwcm9wZXJ0eVZhbHVlICAgICAgICAgICAgICA6Oj0gIHRlcm0gKCBcIixcIj8gdGVybSApKiA7XG5cblxuICAgIHByb3BlcnR5TmFtZSAgICAgICAgICAgICAgIDo6PSAgW2lkZW50aWZpZXJdIDtcblxuXG4gICAgaW1wb3J0YW50ICAgICAgICAgICAgICAgICAgOjo9ICBcIiFpbXBvcnRhbnRcIiA7XG5cblxuICAgIHNlbGVjdG9yICAgICAgICAgICAgICAgICAgIDo6PSAgKCBjbGFzcyB8IHBzZXVkb0NsYXNzIHwgcHNldWRvRWxlbWVudCB8IGF0dHJpYnV0ZSApKyA7XG5cblxuICAgIGNsYXNzICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCIuXCI8Tk9fV0hJVEVTUEFDRT5baWRlbnRpZmllcl0gcGFyZW50aGVzaXNlZFNlbGVjdG9yPyA7XG5cblxuICAgIHBzZXVkb0NsYXNzICAgICAgICAgICAgICAgIDo6PSAgXCI6XCI8Tk9fV0hJVEVTUEFDRT5baWRlbnRpZmllcl0gcGFyZW50aGVzaXNlZFNlbGVjdG9yPyA7XG5cblxuICAgIHBzZXVkb0VsZW1lbnQgICAgICAgICAgICAgIDo6PSAgXCI6OlwiPE5PX1dISVRFU1BBQ0U+W2lkZW50aWZpZXJdIHBhcmVudGhlc2lzZWRTZWxlY3Rvcj8gO1xuXG5cbiAgICBwYXJlbnRoZXNpc2VkU2VsZWN0b3IgICAgICA6Oj0gIDxOT19XSElURVNQQUNFPlwiKFwiIHNlbGVjdG9yIDxOT19XSElURVNQQUNFPlwiKVwiIDtcblxuXG4gICAgYXR0cmlidXRlICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRlbnRpZmllcl1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggXCI9XCIgfCBcIn49XCIgfCBcInw9XCIgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggW2lkZW50aWZpZXJdIHwgW3N0cmluZy1saXRlcmFsXSApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk/XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gICAgdGVybSAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBbcGx1cy1vci1taW51c10/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIFtwZXJjZW50YWdlXSB8IFtmcmVxdWVuY3ldIHwgW2ZyYWN0aW9uXSB8IFtsZW5ndGhdIHwgW2FuZ2xlXSB8IFtyZW1zXSB8IFtlbXNdIHwgW3RpbWVdIHwgW251bWJlcl0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0cmluZy1saXRlcmFsXStcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZGVudGlmaWVyXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbG91cl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICAgIHVyaSAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCJ1cmxcIjxOT19XSElURVNQQUNFPlwiKFwiIFtzdHJpbmctbGl0ZXJhbF0gXCIpXCIgO1xuXG5cbiAgICBmdW5jdGlvbiAgICAgICAgICAgICAgICAgICA6Oj0gIFtpZGVudGlmaWVyXTxOT19XSElURVNQQUNFPlwiKFwiIHByb3BlcnR5VmFsdWUgXCIpXCIgO1xuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG4iXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEySkE7OztlQUFBOzs7QUF6SkEsTUFBTUEsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUpiLENBQUM7TUFFRCxXQUFlQSJ9