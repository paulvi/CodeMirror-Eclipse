CodeMirror.XQuery.defineModule({"prefix":"xhive","namespace":"http://www.x-hive.com/2001/08/xquery-function","functions":[{"name":"create-library","params":[{"name":"uri","as":"xs:string"}],"doc":"Creates a library with the specified <code>$uri</code> location. Any parent libraries that are missing in the path are created."},{"name":"insert-into","params":[{"name":"where","as":"node()"},{"name":"what","as":"item()*"}],"doc":"Applying any of the insert functions inserts the <code>$what</code> value   relative to the <code>$where</code> value. The <code>insert-into</code> and <code>insert-into-as-last</code> elements behave identically. Atomic values within the <code>$what</code> value are   converted into text nodes similar to element constructors. If the <code>$where</code> value is not a node or the empty sequence, an error is raised."},{"name":"insert-into-as-first","params":[{"name":"where","as":"node()"},{"name":"what","as":"item()*"}],"doc":"Applying any of the insert functions inserts the <code>$what</code> value   relative to the <code>$where</code> value. The <code>insert-into</code> and <code>insert-into-as-last</code> elements behave identically. Atomic values within the <code>$what</code> value are   converted into text nodes similar to element constructors. If the <code>$where</code> value is not a node or the empty sequence, an error is raised."},{"name":"insert-into-as-last","params":[{"name":"where","as":"node()"},{"name":"what","as":"item()*"}],"doc":"Applying any of the insert functions inserts the <code>$what</code> value   relative to the <code>$where</code> value. The <code>insert-into</code> and <code>insert-into-as-last</code> elements behave identically. Atomic values within the <code>$what</code> value are   converted into text nodes similar to element constructors. If the <code>$where</code> value is not a node or the empty sequence, an error is raised."},{"name":"insert-before","params":[{"name":"where","as":"node()"},{"name":"what","as":"item()*"}],"doc":"Applying any of the insert functions inserts the <code>$what</code> value   relative to the <code>$where</code> value. The <code>insert-into</code> and <code>insert-into-as-last</code> elements behave identically. Atomic values within the <code>$what</code> value are   converted into text nodes similar to element constructors. If the <code>$where</code> value is not a node or the empty sequence, an error is raised."},{"name":"insert-after","params":[{"name":"where","as":"node()"},{"name":"what","as":"item()*"}],"doc":"Applying any of the insert functions inserts the <code>$what</code> value   relative to the <code>$where</code> value. The <code>insert-into</code> and <code>insert-into-as-last</code> elements behave identically. Atomic values within the <code>$what</code> value are   converted into text nodes similar to element constructors. If the <code>$where</code> value is not a node or the empty sequence, an error is raised."},{"name":"insert-document","params":[{"name":"uri","as":"xs:string"},{"name":"document","as":"document-node()"}],"doc":"Inserts the <code>$document</code> value at the $uri location. If there is already a document at the <code>$uri</code> location an error is raised."},{"name":"remove","params":[{"name":"nodes","as":"node()*"}],"doc":"Removes the <code>$nodes</code> values from their parents. The <code>xhive:delete()</code> function is an alias to this function."},{"name":"remove-library","params":[{"name":"uri","as":"xs:string"}],"doc":"Removes the library at <code>$uri</code> location, including all children."},{"name":"rename-to","params":[{"name":"what","as":"node()"},{"name":"newName","as":"xs:QName"}],"doc":"Renames the specified node to the <code>$newName</code> value. This   function raises an error if the target is not an attribute node,element node, a processing instruction, or a document node. Processing   instructions can only be renamed to unqualified local names, such asQNames without a namespace URI. To construct a QName, use the standard <code>fn:QName($uri as xs:string?, $qname as xs:string) as xs:QName</code> function."},{"name":"replace-value-of","params":[{"name":"where","as":"node()"},{"name":"newContents","as":"item()*"}],"doc":"Removes all children from the $where value and replaces them with <code>$newContents</code> values. This function allows to directly move DOM nodes   into a new target. <p>This function is similar to the <code>xhive:delete($where/node()),xhive:insert-into($where, $newContents),    xhive:move($target as node(), $sources as node()*) asempty-sequence(), and xhive:move($target as node(), $anchor as    node()?, $sources as node()*) as empty-sequence()</code> functions. By    default, <code>$sources</code> values are inserted last into <code>$target</code> values. If a <code>$anchor</code> value is specified and not empty, the <code>$sources</code> values are    inserted before the $anchor values.</p> "},{"name":"move","params":[{"name":"target","as":"node()"},{"name":"sources","as":"node()*"}],"doc":"By default, <code>$sources</code> values are inserted last into <code>$target</code> values. If   a <code>$anchor</code> value is specified and not empty, the <code>$sources</code> values are   inserted before the $anchor values. <p>Using this function has a potential performance advantage over deleting    and inserting nodes. If the <code>$where</code> and <code>$newContents</code> values belong to    the same document, nodes do not have to be copied or imported.</p>  <p>Nodes covered by indexes with UNIQUE_KEYS flags can be moved. If any of    the <code>$node</code> child nodes use a unique index, moving elements with a <code>delete node $node and an insert node $node into $target</code> statement    generates a DUPLICATE_KEY exception. Using <code>xhive:move($target, $node)</code> instead works.</p> "},{"name":"move","params":[{"name":"target","as":"node()"},{"name":"anchor","as":"node()?"},{"name":"sources","as":"node()*"}],"doc":"By default, <code>$sources</code> values are inserted last into <code>$target</code> values. If   a <code>$anchor</code> value is specified and not empty, the <code>$sources</code> values are   inserted before the $anchor values. <p>Using this function has a potential performance advantage over deleting    and inserting nodes. If the <code>$where</code> and <code>$newContents</code> values belong to    the same document, nodes do not have to be copied or imported.</p>  <p>Nodes covered by indexes with UNIQUE_KEYS flags can be moved. If any of    the <code>$node</code> child nodes use a unique index, moving elements with a <code>delete node $node and an insert node $node into $target</code> statement    generates a DUPLICATE_KEY exception. Using <code>xhive:move($target, $node)</code> instead works.</p> "},{"name":"fts","params":[{"name":"context","as":"node()"},{"name":"query","as":"xs:string"},{"name":"options","as":"xs:string"}],"doc":"This function executes a query using the full text index. The <code>$options</code> argument is an optional string literal containing a semicolon-separated list of options."},{"name":"evaluate","params":[{"name":"query","as":"xs:string"}],"doc":"This function evaluates a single string argument as an XQuery query and returns the result of the query."},{"name":"parse","params":[{"name":"doc-text","as":"xs:string"},{"name":"schema-hint","as":"xs:string"}],"doc":"These functions take the serialized text of an XML document   and parse it into a document. The document is validated if it declaresa schema using a validate-if-schema option. Validation against a   certain schema can be forced by passing a $schema-hint option. If thedocument is not well-formed, not valid, or fails to parse for another   reason, the function throws an error"},{"name":"parse","params":[{"name":"doc-text","as":"xs:string"}],"doc":"These functions take the serialized text of an XML document   and parse it into a document. The document is validated if it declaresa schema using a validate-if-schema option. Validation against a   certain schema can be forced by passing a $schema-hint option. If thedocument is not well-formed, not valid, or fails to parse for another   reason, the function throws an error"},{"name":"input","params":[],"doc":"This function returns the calling documents and is useful when there is another active context node."},{"name":"java","params":[{"name":"class","as":"xs:string"}],"doc":"This function calls a Java function. For more information, see <code>com.xhive.query.interfaces.XhiveXQueryExtensionFunctionIf</code> API documentation."},{"name":"get-nodes-by-key","params":[{"name":"library","as":"xs:string"},{"name":"indexname","as":"xs:string"},{"name":"key","as":"xs:string"}],"doc":"This function returns the name of the document that is set by   the <code>XhiveLibraryChildIf.setName(String name)</code> method. If the document   has a name and when the passed node is a document or has an ownerdocument, the name of the document is returned. Otherwise, this   function returns an empty sequence."},{"name":"document-name","params":[{"name":"document","as":"document-node()"}],"doc":"This function returns the id of the document. This id is   generated by xDB on creation of the document. If the passed node is adocument or has an owner document, the id of the document is returned.   Otherwise an empty sequence is returned."},{"name":"document-id","params":[{"name":"document","as":"document-node()"}],"doc":"This function returns the id of the document. This id is   generated by xDB on creation of the document. If the passed node is adocument or has an owner document, the id of the document is returned.   Otherwise an empty sequence is returned."},{"name":"force","params":[{"name":"items","as":"item()*"}],"doc":"This function forces the immediate evaluation of its argument.   If this function is used as the outermost expression of a query, thequery is evaluated immediately and the result is stored internally.   This function uses the query result to modify the data, which isnormally impossible because of lazy evaluation."},{"name":"version","params":[{"name":"document","as":"document-node()*"},{"name":"version","as":"xs:string"}],"doc":"This function returns a document sequence that represent the   contents of a set of specific input document versions. The functionreturns an empty sequence for nodes that are not documents, are not   versioned, or for non-existing versions. The version argument is firstevaluated as a label. If no version with that label is found, the   argument is evaluated as a version ID. For example, if you have aversion 1.4 which has a 1.2 label , a query for version 1.2 returns   version 1.4."},{"name":"version-property","params":[{"name":"document","as":"document-node()*"},{"name":"version","as":"xs:string"},{"name":"property","as":"xs:string"}],"doc":"This function returns the value of a specified version attribute. This   function is like the <code>xhive:version</code> function, but the result consists   of a sequence of strings. The property argument must be one of thefollowing: <ul> <li> <b>date</b> </li> — The date on which the version was created, using the    yyyy-mm-ddThh:mm format. <li> <b>creator</b> </li> — The name of the user who created the version. <li> <b>checked-out-by</b> </li> — The name of the user who checked out this document version.</ul> "},{"name":"version-ids","params":[{"name":"document","as":"node()*["},{"name":"branchversion","as":"xs:string]"}],"doc":"This function returns the IDs of document versions. If no second   argument is specified, all version IDs of the version space arereturned as a string sequence. Passing a second argument, retrieves   more detailed information: <ul> <li>If the branch ID is specified, the result contains only those     version IDs that are part of that branch and the ones shared withother branches.</li>  <li>If 1 is passed as the argument, the result contains a list of all     branch IDs in the version space of the document argument.</li>  <li>If the version ID is specified, the result contains the version     labels for that version.</li> </ul> For non-versioned documents, or when the branchversion argument refers   to a nonexisting branch or version, the result is the empty sequence."},{"name":"metadata","params":[{"name":"document","as":"document-node()"},{"name":"key","as":"xs:string"}],"doc":"This function retrieves the value that belongs to the <code>$key</code> attribute in the metadata of the <code>$document</code> document . If the key is the empty sequence, the result is a sequence   with the values of all metadata fields."},{"name":"highlight","params":[{"name":"arg","as":"item()*"}],"doc":"This function calls the extension function set on the query using the <code>XhiveXQueryQueryIf.setHighlighter(highlighter)</code> API. The first extension function argument is a sequence of strings   consisting of the tokens used by any full text search in the currentFLWOR expression. Any arguments passed to the XQuery function are   passed as other arguments to the highlighter function."},{"name":"created-at","params":[{"name":"uri","as":"xs:string"}],"doc":"Returns when the document, library, or blob at <code>$uri</code> was created. If <code>$uri</code> does not exist, an error is raised (err:FODC0002)."},{"name":"last-modified","params":[{"name":"uri","as":"xs:string"}],"doc":"Returns when the document, library, or blob at <code>$uri</code> was modified for the last time. If <code>$uri</code> does not exist, an error is raised (err:FODC0002)."},{"name":"child-documents","params":[{"name":"uri","as":"xs:string"}],"doc":"Returns direct document children of the library indicated by <code>$uri</code> ,   i.e., only documents that are located directly underneath the library,not recursive descendants like the built-in doc function. If <code>$uri</code> does   not point to a library, or the library has no children, the emptysequence is returned. If <code>$uri</code> does not exist, an error is raised   (err:FODC0002). <p>Note that because in xDB indexes cover all descendant documents, queries    using this function will not be able to use any indexes on thelibrary. In most cases, it might be better and easier to organize    your content within xDB so that you don't need thisfunction.</p> "},{"name":"child-uris","params":[{"name":"uri","as":"xs:string"}],"doc":"Returns the absolute URIs of direct children of the library   indicatedby <code>$uri</code> . If <code>$uri</code> does not point to a library, or the library   has no children, the emptysequence is returned. If <code>$uri</code> does not   exist, an error is raised (err:FODC0002). In contrast to <code>xhive:child-documents</code> , this will return the URIs of blob nodes and/or   libraries."}]});
