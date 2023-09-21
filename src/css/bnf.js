"use strict";

const bnf = `



    stylesheet                 ::= ( media | ruleSet | declaration | error )+ ;





    media                      ::= "@media" mediaQueries "{" ( ruleSet | declaration )* "}" ;
                                                              
                                                              
    mediaQueries               ::=  mediaQuery ( "," mediaQuery )* ;
                                                              
                                                              
    mediaQuery                 ::=  "not"? ( "only"? mediaType "and" )? mediaExpression ( "and" mediaExpression )* ;


    mediaType                  ::=  "all" | "print" | "screen" | "speech" ;
                                                              
                                                              
    mediaExpression            ::=  "(" [identifier] ( ":" expression )? ")" ;





    ruleSet                    ::=  selectors "{" declaration* "}" ;
    
    
    selectors                  ::=  selector ( "," selector )* ;


    selector                   ::=  ( class | pseudoClass | pseudoElement | attribute )+ ;





    declaration                ::=  property ":" expression ( "," expression )* priority? ";" ;


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


    property                   ::=  [identifier] ;


    expression                 ::=  term ( ","? term )* ;


    priority                   ::=  "!important" ;





    term                       ::=  [arithmetic-operator]?
                                                       
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


    function                   ::=  [identifier]<NO_WHITESPACE>"(" expression ")" ;





    error                      ::=  . ;



`;

export default bnf;
