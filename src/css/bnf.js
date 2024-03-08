"use strict";

const bnf = `

    stylesheet                 ::= ( media | ruleSet | declaration | error )+ ;



    media                      ::= "@media" mediaQueries "{" ( ruleSet | declaration )* "}" ;
                                     
                                                              
    ruleSet                    ::=  selectors "{" declaration* "}" ;
    
    
    declaration                ::=  propertyName ":" propertyValues important? ";" ;


    error!                     ::=  . ;



    propertyValues             ::=  propertyValue ( "," propertyValue )* ;


    mediaQueries               ::=  mediaQuery ( "," mediaQuery )* ;
                                                              
                                                              
    selectors                  ::=  selector ( "," selector )* ;



    mediaQuery                 ::=  "not"? ( "only"? mediaType "and" )? mediaExpression ( "and" mediaExpression )* ;


    mediaType                  ::=  "all" | "print" | "screen" | "speech" ;
                                                              
                                                              
    mediaExpression            ::=  "(" [identifier] ( ":" propertyValue )? ")" ;



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

export default bnf;
