'use strict';

const cssBNF = `



    stylesheet                 ::= ( media | ruleSet | declaration | verticalSpace | error )+ ;





    media                      ::= "@media" mediaQueries "{" ( ruleSet | declaration | verticalSpace )* "}" verticalSpace? ;
                                                              
                                                              
    mediaQueries               ::=  mediaQuery ( "," verticalSpace? mediaQuery )* ;
                                                              
                                                              
    mediaQuery                 ::=  "not"? ( "only"? mediaType "and" )? mediaExpression ( "and" mediaExpression )* ;


    mediaType                  ::=  "all" | "print" | "screen" | "speech" ;
                                                              
                                                              
    mediaExpression            ::=  "(" [identifier] ( ":" expression )? ")" ;





    ruleSet                    ::=  selectors "{" ( declaration | verticalSpace )* "}" verticalSpace? ;
    
    
    selectors                  ::=  selector ( "," verticalSpace? selector )* ;


    selector                   ::=  ( class | pseudoClass | pseudoElement | attribute )+ ;





    declaration                ::=  property ":" verticalSpace? expression ( "," verticalSpace? expression )* priority? ";" ;


    class                      ::=  "."<NO_WHITESPACE>[identifier] parenthesisedSelector? ;


    pseudoClass                ::=  ":"<NO_WHITESPACE>[identifier] parenthesisedSelector? ;


    pseudoElement              ::=  "::"<NO_WHITESPACE>[identifier] parenthesisedSelector? ;


    parenthesisedSelector      ::=  <NO_WHITESPACE>"(" selector <NO_WHITESPACE>")" ;


    attribute                  ::=  "["

                                       verticalSpace?

                                       [identifier]

                                       verticalSpace?
   
                                       (

                                         ( "=" | "~=" | "|=" )

                                         verticalSpace?

                                         ( [identifier] | [string-literal] )

                                         verticalSpace?

                                       )?

                                    "]"

                                 ;


    property                   ::=  [identifier] verticalSpace? ;


    expression                 ::=  term ( ( "," verticalSpace? )? term )* ;


    priority                   ::=  "!important" ;





    term                       ::=  [unary-operator]?
                                                       
                                      (
                                                       
                                        ( [percentage] | [frequency] | [length] | [angle] | [rems] | [ems] | [time] | [number] )
                                                       
                                        |
                                                       
                                        uri
                                                       
                                        |
                                                       
                                        function
                                                       
                                        |
                                                       
                                        ( [string-literal] verticalSpace? )+
                                                       
                                        |
                                                       
                                        [identifier]
                                                       
                                        |
                                                       
                                        [colour]
                                                       
                                      )
                                                       
                                   ;


    uri                        ::=  "url"<NO_WHITESPACE>"(" [string-literal] ")" ;


    function                   ::=  [identifier]<NO_WHITESPACE>"(" expression ")" ;





    verticalSpace              ::=  <END_OF_LINE>+ ;





    error                      ::=  . ;



`;

export default cssBNF;
