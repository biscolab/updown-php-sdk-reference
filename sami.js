
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Biscolab" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Biscolab.html">Biscolab</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Biscolab_UpDown" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Biscolab/UpDown.html">UpDown</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Biscolab_UpDown_Abstracts" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Biscolab/UpDown/Abstracts.html">Abstracts</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Biscolab_UpDown_Abstracts_AbstractCollection" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Abstracts/AbstractCollection.html">AbstractCollection</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Abstracts_AbstractObject" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Abstracts/AbstractObject.html">AbstractObject</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Biscolab_UpDown_Enum" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Biscolab/UpDown/Enum.html">Enum</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Biscolab_UpDown_Enum_UpDownFieldType" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Enum/UpDownFieldType.html">UpDownFieldType</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Enum_UpDownRequestMethod" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Enum/UpDownRequestMethod.html">UpDownRequestMethod</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Biscolab_UpDown_Exception" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Biscolab/UpDown/Exception.html">Exception</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Biscolab_UpDown_Exception_Exception" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Exception/Exception.html">Exception</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Exception_InvalidArgumentException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Exception/InvalidArgumentException.html">InvalidArgumentException</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Exception_RequestException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Exception/RequestException.html">RequestException</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Exception_ResponseException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Exception/ResponseException.html">ResponseException</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Biscolab_UpDown_Fields" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Biscolab/UpDown/Fields.html">Fields</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Biscolab_UpDown_Fields_CheckFields" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Fields/CheckFields.html">CheckFields</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Fields_DownTimeFields" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Fields/DownTimeFields.html">DownTimeFields</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Fields_EventFields" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Fields/EventFields.html">EventFields</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Fields_MetricsFields" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Fields/MetricsFields.html">MetricsFields</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Fields_NodeFields" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Fields/NodeFields.html">NodeFields</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Fields_RequestsFields" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Fields/RequestsFields.html">RequestsFields</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Fields_SslFields" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Fields/SslFields.html">SslFields</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Fields_TimingsFields" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Fields/TimingsFields.html">TimingsFields</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Fields_UpDownRequestFields" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Fields/UpDownRequestFields.html">UpDownRequestFields</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Fields_UpDownResultFields" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Fields/UpDownResultFields.html">UpDownResultFields</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Fields_WebHookFields" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Fields/WebHookFields.html">WebHookFields</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Biscolab_UpDown_Http" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Biscolab/UpDown/Http.html">Http</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Biscolab_UpDown_Http_UpDownClient" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Http/UpDownClient.html">UpDownClient</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Http_UpDownRequest" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Http/UpDownRequest.html">UpDownRequest</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Http_UpDownResponse" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Http/UpDownResponse.html">UpDownResponse</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Http_UpDownResult" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Http/UpDownResult.html">UpDownResult</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Biscolab_UpDown_Objects" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Biscolab/UpDown/Objects.html">Objects</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Biscolab_UpDown_Objects_BaseObject" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Objects/BaseObject.html">BaseObject</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Objects_Check" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Objects/Check.html">Check</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Objects_CrudObject" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Objects/CrudObject.html">CrudObject</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Objects_Event" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Objects/Event.html">Event</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Objects_Node" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Objects/Node.html">Node</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Objects_WebHook" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Objects/WebHook.html">WebHook</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Biscolab_UpDown_Types" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Biscolab/UpDown/Types.html">Types</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Biscolab_UpDown_Types_Checks" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Types/Checks.html">Checks</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Types_DownTime" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Types/DownTime.html">DownTime</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Types_DownTimes" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Types/DownTimes.html">DownTimes</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Types_Metrics" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Types/Metrics.html">Metrics</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Types_Nodes" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Types/Nodes.html">Nodes</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Types_Requests" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Types/Requests.html">Requests</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Types_Ssl" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Types/Ssl.html">Ssl</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Types_Timings" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Types/Timings.html">Timings</a>                    </div>                </li>                            <li data-name="class:Biscolab_UpDown_Types_WebHooks" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/UpDown/Types/WebHooks.html">WebHooks</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Biscolab_UpDown_UpDown" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Biscolab/UpDown/UpDown.html">UpDown</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Biscolab.html", "name": "Biscolab", "doc": "Namespace Biscolab"},{"type": "Namespace", "link": "Biscolab/UpDown.html", "name": "Biscolab\\UpDown", "doc": "Namespace Biscolab\\UpDown"},{"type": "Namespace", "link": "Biscolab/UpDown/Abstracts.html", "name": "Biscolab\\UpDown\\Abstracts", "doc": "Namespace Biscolab\\UpDown\\Abstracts"},{"type": "Namespace", "link": "Biscolab/UpDown/Enum.html", "name": "Biscolab\\UpDown\\Enum", "doc": "Namespace Biscolab\\UpDown\\Enum"},{"type": "Namespace", "link": "Biscolab/UpDown/Exception.html", "name": "Biscolab\\UpDown\\Exception", "doc": "Namespace Biscolab\\UpDown\\Exception"},{"type": "Namespace", "link": "Biscolab/UpDown/Fields.html", "name": "Biscolab\\UpDown\\Fields", "doc": "Namespace Biscolab\\UpDown\\Fields"},{"type": "Namespace", "link": "Biscolab/UpDown/Http.html", "name": "Biscolab\\UpDown\\Http", "doc": "Namespace Biscolab\\UpDown\\Http"},{"type": "Namespace", "link": "Biscolab/UpDown/Objects.html", "name": "Biscolab\\UpDown\\Objects", "doc": "Namespace Biscolab\\UpDown\\Objects"},{"type": "Namespace", "link": "Biscolab/UpDown/Types.html", "name": "Biscolab\\UpDown\\Types", "doc": "Namespace Biscolab\\UpDown\\Types"},
            
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Abstracts", "fromLink": "Biscolab/UpDown/Abstracts.html", "link": "Biscolab/UpDown/Abstracts/AbstractCollection.html", "name": "Biscolab\\UpDown\\Abstracts\\AbstractCollection", "doc": "&quot;Class AbstractCollection&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/UpDown/Abstracts/AbstractCollection.html", "link": "Biscolab/UpDown/Abstracts/AbstractCollection.html#method___construct", "name": "Biscolab\\UpDown\\Abstracts\\AbstractCollection::__construct", "doc": "&quot;AbstractCollection constructor.&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/UpDown/Abstracts/AbstractCollection.html", "link": "Biscolab/UpDown/Abstracts/AbstractCollection.html#method_setItems", "name": "Biscolab\\UpDown\\Abstracts\\AbstractCollection::setItems", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/UpDown/Abstracts/AbstractCollection.html", "link": "Biscolab/UpDown/Abstracts/AbstractCollection.html#method_addItem", "name": "Biscolab\\UpDown\\Abstracts\\AbstractCollection::addItem", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/UpDown/Abstracts/AbstractCollection.html", "link": "Biscolab/UpDown/Abstracts/AbstractCollection.html#method_parseItem", "name": "Biscolab\\UpDown\\Abstracts\\AbstractCollection::parseItem", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/UpDown/Abstracts/AbstractCollection.html", "link": "Biscolab/UpDown/Abstracts/AbstractCollection.html#method_toJson", "name": "Biscolab\\UpDown\\Abstracts\\AbstractCollection::toJson", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/UpDown/Abstracts/AbstractCollection.html", "link": "Biscolab/UpDown/Abstracts/AbstractCollection.html#method_toArray", "name": "Biscolab\\UpDown\\Abstracts\\AbstractCollection::toArray", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/UpDown/Abstracts/AbstractCollection.html", "link": "Biscolab/UpDown/Abstracts/AbstractCollection.html#method___toString", "name": "Biscolab\\UpDown\\Abstracts\\AbstractCollection::__toString", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/UpDown/Abstracts/AbstractCollection.html", "link": "Biscolab/UpDown/Abstracts/AbstractCollection.html#method_position", "name": "Biscolab\\UpDown\\Abstracts\\AbstractCollection::position", "doc": "&quot;Return the current position of the index&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/UpDown/Abstracts/AbstractCollection.html", "link": "Biscolab/UpDown/Abstracts/AbstractCollection.html#method_current", "name": "Biscolab\\UpDown\\Abstracts\\AbstractCollection::current", "doc": "&quot;Return the current object&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/UpDown/Abstracts/AbstractCollection.html", "link": "Biscolab/UpDown/Abstracts/AbstractCollection.html#method_get", "name": "Biscolab\\UpDown\\Abstracts\\AbstractCollection::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/UpDown/Abstracts/AbstractCollection.html", "link": "Biscolab/UpDown/Abstracts/AbstractCollection.html#method_first", "name": "Biscolab\\UpDown\\Abstracts\\AbstractCollection::first", "doc": "&quot;Move index to first position and return current element&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/UpDown/Abstracts/AbstractCollection.html", "link": "Biscolab/UpDown/Abstracts/AbstractCollection.html#method_seek", "name": "Biscolab\\UpDown\\Abstracts\\AbstractCollection::seek", "doc": "&quot;Move the index at the specified position&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/UpDown/Abstracts/AbstractCollection.html", "link": "Biscolab/UpDown/Abstracts/AbstractCollection.html#method_count", "name": "Biscolab\\UpDown\\Abstracts\\AbstractCollection::count", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/UpDown/Abstracts/AbstractCollection.html", "link": "Biscolab/UpDown/Abstracts/AbstractCollection.html#method_getLastIndex", "name": "Biscolab\\UpDown\\Abstracts\\AbstractCollection::getLastIndex", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/UpDown/Abstracts/AbstractCollection.html", "link": "Biscolab/UpDown/Abstracts/AbstractCollection.html#method_last", "name": "Biscolab\\UpDown\\Abstracts\\AbstractCollection::last", "doc": "&quot;Move index at the end of collection and return current element&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Abstracts", "fromLink": "Biscolab/UpDown/Abstracts.html", "link": "Biscolab/UpDown/Abstracts/AbstractObject.html", "name": "Biscolab\\UpDown\\Abstracts\\AbstractObject", "doc": "&quot;Class AbstractObject&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractObject", "fromLink": "Biscolab/UpDown/Abstracts/AbstractObject.html", "link": "Biscolab/UpDown/Abstracts/AbstractObject.html#method___construct", "name": "Biscolab\\UpDown\\Abstracts\\AbstractObject::__construct", "doc": "&quot;AbstractObject constructor.&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractObject", "fromLink": "Biscolab/UpDown/Abstracts/AbstractObject.html", "link": "Biscolab/UpDown/Abstracts/AbstractObject.html#method_setUpDown", "name": "Biscolab\\UpDown\\Abstracts\\AbstractObject::setUpDown", "doc": "&quot;Set UpDown instance&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractObject", "fromLink": "Biscolab/UpDown/Abstracts/AbstractObject.html", "link": "Biscolab/UpDown/Abstracts/AbstractObject.html#method_getUpDownInstance", "name": "Biscolab\\UpDown\\Abstracts\\AbstractObject::getUpDownInstance", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractObject", "fromLink": "Biscolab/UpDown/Abstracts/AbstractObject.html", "link": "Biscolab/UpDown/Abstracts/AbstractObject.html#method_setArgs", "name": "Biscolab\\UpDown\\Abstracts\\AbstractObject::setArgs", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractObject", "fromLink": "Biscolab/UpDown/Abstracts/AbstractObject.html", "link": "Biscolab/UpDown/Abstracts/AbstractObject.html#method_isFieldRequired", "name": "Biscolab\\UpDown\\Abstracts\\AbstractObject::isFieldRequired", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractObject", "fromLink": "Biscolab/UpDown/Abstracts/AbstractObject.html", "link": "Biscolab/UpDown/Abstracts/AbstractObject.html#method_addError", "name": "Biscolab\\UpDown\\Abstracts\\AbstractObject::addError", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractObject", "fromLink": "Biscolab/UpDown/Abstracts/AbstractObject.html", "link": "Biscolab/UpDown/Abstracts/AbstractObject.html#method_parseFieldValue", "name": "Biscolab\\UpDown\\Abstracts\\AbstractObject::parseFieldValue", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractObject", "fromLink": "Biscolab/UpDown/Abstracts/AbstractObject.html", "link": "Biscolab/UpDown/Abstracts/AbstractObject.html#method_throwErrors", "name": "Biscolab\\UpDown\\Abstracts\\AbstractObject::throwErrors", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractObject", "fromLink": "Biscolab/UpDown/Abstracts/AbstractObject.html", "link": "Biscolab/UpDown/Abstracts/AbstractObject.html#method_setData", "name": "Biscolab\\UpDown\\Abstracts\\AbstractObject::setData", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractObject", "fromLink": "Biscolab/UpDown/Abstracts/AbstractObject.html", "link": "Biscolab/UpDown/Abstracts/AbstractObject.html#method_toJson", "name": "Biscolab\\UpDown\\Abstracts\\AbstractObject::toJson", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractObject", "fromLink": "Biscolab/UpDown/Abstracts/AbstractObject.html", "link": "Biscolab/UpDown/Abstracts/AbstractObject.html#method_toArray", "name": "Biscolab\\UpDown\\Abstracts\\AbstractObject::toArray", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractObject", "fromLink": "Biscolab/UpDown/Abstracts/AbstractObject.html", "link": "Biscolab/UpDown/Abstracts/AbstractObject.html#method___toString", "name": "Biscolab\\UpDown\\Abstracts\\AbstractObject::__toString", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractObject", "fromLink": "Biscolab/UpDown/Abstracts/AbstractObject.html", "link": "Biscolab/UpDown/Abstracts/AbstractObject.html#method___call", "name": "Biscolab\\UpDown\\Abstracts\\AbstractObject::__call", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractObject", "fromLink": "Biscolab/UpDown/Abstracts/AbstractObject.html", "link": "Biscolab/UpDown/Abstracts/AbstractObject.html#method___get", "name": "Biscolab\\UpDown\\Abstracts\\AbstractObject::__get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractObject", "fromLink": "Biscolab/UpDown/Abstracts/AbstractObject.html", "link": "Biscolab/UpDown/Abstracts/AbstractObject.html#method___set", "name": "Biscolab\\UpDown\\Abstracts\\AbstractObject::__set", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractObject", "fromLink": "Biscolab/UpDown/Abstracts/AbstractObject.html", "link": "Biscolab/UpDown/Abstracts/AbstractObject.html#method_getPropertyType", "name": "Biscolab\\UpDown\\Abstracts\\AbstractObject::getPropertyType", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractObject", "fromLink": "Biscolab/UpDown/Abstracts/AbstractObject.html", "link": "Biscolab/UpDown/Abstracts/AbstractObject.html#method_getClassName", "name": "Biscolab\\UpDown\\Abstracts\\AbstractObject::getClassName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractObject", "fromLink": "Biscolab/UpDown/Abstracts/AbstractObject.html", "link": "Biscolab/UpDown/Abstracts/AbstractObject.html#method_getCleanClassName", "name": "Biscolab\\UpDown\\Abstracts\\AbstractObject::getCleanClassName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Abstracts\\AbstractObject", "fromLink": "Biscolab/UpDown/Abstracts/AbstractObject.html", "link": "Biscolab/UpDown/Abstracts/AbstractObject.html#method_getNamespace", "name": "Biscolab\\UpDown\\Abstracts\\AbstractObject::getNamespace", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Enum", "fromLink": "Biscolab/UpDown/Enum.html", "link": "Biscolab/UpDown/Enum/UpDownFieldType.html", "name": "Biscolab\\UpDown\\Enum\\UpDownFieldType", "doc": "&quot;Class UpDownFieldType&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Enum", "fromLink": "Biscolab/UpDown/Enum.html", "link": "Biscolab/UpDown/Enum/UpDownRequestMethod.html", "name": "Biscolab\\UpDown\\Enum\\UpDownRequestMethod", "doc": "&quot;Class UpDownRequestMethod&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Exception", "fromLink": "Biscolab/UpDown/Exception.html", "link": "Biscolab/UpDown/Exception/Exception.html", "name": "Biscolab\\UpDown\\Exception\\Exception", "doc": "&quot;Class Exception&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Exception", "fromLink": "Biscolab/UpDown/Exception.html", "link": "Biscolab/UpDown/Exception/InvalidArgumentException.html", "name": "Biscolab\\UpDown\\Exception\\InvalidArgumentException", "doc": "&quot;Class InvalidArgumentException&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Exception", "fromLink": "Biscolab/UpDown/Exception.html", "link": "Biscolab/UpDown/Exception/RequestException.html", "name": "Biscolab\\UpDown\\Exception\\RequestException", "doc": "&quot;Class RequestException&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Exception", "fromLink": "Biscolab/UpDown/Exception.html", "link": "Biscolab/UpDown/Exception/ResponseException.html", "name": "Biscolab\\UpDown\\Exception\\ResponseException", "doc": "&quot;Class ResponseException&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Fields", "fromLink": "Biscolab/UpDown/Fields.html", "link": "Biscolab/UpDown/Fields/CheckFields.html", "name": "Biscolab\\UpDown\\Fields\\CheckFields", "doc": "&quot;Class CheckFields&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Fields", "fromLink": "Biscolab/UpDown/Fields.html", "link": "Biscolab/UpDown/Fields/DownTimeFields.html", "name": "Biscolab\\UpDown\\Fields\\DownTimeFields", "doc": "&quot;Class DownTimeFields&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Fields", "fromLink": "Biscolab/UpDown/Fields.html", "link": "Biscolab/UpDown/Fields/EventFields.html", "name": "Biscolab\\UpDown\\Fields\\EventFields", "doc": "&quot;Class EventFields&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Fields", "fromLink": "Biscolab/UpDown/Fields.html", "link": "Biscolab/UpDown/Fields/MetricsFields.html", "name": "Biscolab\\UpDown\\Fields\\MetricsFields", "doc": "&quot;Class MetricsFields&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Fields", "fromLink": "Biscolab/UpDown/Fields.html", "link": "Biscolab/UpDown/Fields/NodeFields.html", "name": "Biscolab\\UpDown\\Fields\\NodeFields", "doc": "&quot;Class NodeFields&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Fields", "fromLink": "Biscolab/UpDown/Fields.html", "link": "Biscolab/UpDown/Fields/RequestsFields.html", "name": "Biscolab\\UpDown\\Fields\\RequestsFields", "doc": "&quot;Class MetricsFields&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Fields", "fromLink": "Biscolab/UpDown/Fields.html", "link": "Biscolab/UpDown/Fields/SslFields.html", "name": "Biscolab\\UpDown\\Fields\\SslFields", "doc": "&quot;Class SslFields&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Fields", "fromLink": "Biscolab/UpDown/Fields.html", "link": "Biscolab/UpDown/Fields/TimingsFields.html", "name": "Biscolab\\UpDown\\Fields\\TimingsFields", "doc": "&quot;Class TimingsFields&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Fields", "fromLink": "Biscolab/UpDown/Fields.html", "link": "Biscolab/UpDown/Fields/UpDownRequestFields.html", "name": "Biscolab\\UpDown\\Fields\\UpDownRequestFields", "doc": "&quot;Class UpDownRequestFields&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Fields", "fromLink": "Biscolab/UpDown/Fields.html", "link": "Biscolab/UpDown/Fields/UpDownResultFields.html", "name": "Biscolab\\UpDown\\Fields\\UpDownResultFields", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Fields", "fromLink": "Biscolab/UpDown/Fields.html", "link": "Biscolab/UpDown/Fields/WebHookFields.html", "name": "Biscolab\\UpDown\\Fields\\WebHookFields", "doc": "&quot;Class EventFields&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Http", "fromLink": "Biscolab/UpDown/Http.html", "link": "Biscolab/UpDown/Http/UpDownClient.html", "name": "Biscolab\\UpDown\\Http\\UpDownClient", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownClient", "fromLink": "Biscolab/UpDown/Http/UpDownClient.html", "link": "Biscolab/UpDown/Http/UpDownClient.html#method___construct", "name": "Biscolab\\UpDown\\Http\\UpDownClient::__construct", "doc": "&quot;GeocoderClient constructor.&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownClient", "fromLink": "Biscolab/UpDown/Http/UpDownClient.html", "link": "Biscolab/UpDown/Http/UpDownClient.html#method_setClient", "name": "Biscolab\\UpDown\\Http\\UpDownClient::setClient", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownClient", "fromLink": "Biscolab/UpDown/Http/UpDownClient.html", "link": "Biscolab/UpDown/Http/UpDownClient.html#method_get", "name": "Biscolab\\UpDown\\Http\\UpDownClient::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownClient", "fromLink": "Biscolab/UpDown/Http/UpDownClient.html", "link": "Biscolab/UpDown/Http/UpDownClient.html#method_makeCall", "name": "Biscolab\\UpDown\\Http\\UpDownClient::makeCall", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownClient", "fromLink": "Biscolab/UpDown/Http/UpDownClient.html", "link": "Biscolab/UpDown/Http/UpDownClient.html#method_addApiKeyToParams", "name": "Biscolab\\UpDown\\Http\\UpDownClient::addApiKeyToParams", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownClient", "fromLink": "Biscolab/UpDown/Http/UpDownClient.html", "link": "Biscolab/UpDown/Http/UpDownClient.html#method_post", "name": "Biscolab\\UpDown\\Http\\UpDownClient::post", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownClient", "fromLink": "Biscolab/UpDown/Http/UpDownClient.html", "link": "Biscolab/UpDown/Http/UpDownClient.html#method_put", "name": "Biscolab\\UpDown\\Http\\UpDownClient::put", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownClient", "fromLink": "Biscolab/UpDown/Http/UpDownClient.html", "link": "Biscolab/UpDown/Http/UpDownClient.html#method_delete", "name": "Biscolab\\UpDown\\Http\\UpDownClient::delete", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Http", "fromLink": "Biscolab/UpDown/Http.html", "link": "Biscolab/UpDown/Http/UpDownRequest.html", "name": "Biscolab\\UpDown\\Http\\UpDownRequest", "doc": "&quot;Class UpDownRequest&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownRequest", "fromLink": "Biscolab/UpDown/Http/UpDownRequest.html", "link": "Biscolab/UpDown/Http/UpDownRequest.html#method___construct", "name": "Biscolab\\UpDown\\Http\\UpDownRequest::__construct", "doc": "&quot;UpDownRequest constructor.&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownRequest", "fromLink": "Biscolab/UpDown/Http/UpDownRequest.html", "link": "Biscolab/UpDown/Http/UpDownRequest.html#method_addParam", "name": "Biscolab\\UpDown\\Http\\UpDownRequest::addParam", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownRequest", "fromLink": "Biscolab/UpDown/Http/UpDownRequest.html", "link": "Biscolab/UpDown/Http/UpDownRequest.html#method_getQuery", "name": "Biscolab\\UpDown\\Http\\UpDownRequest::getQuery", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Http", "fromLink": "Biscolab/UpDown/Http.html", "link": "Biscolab/UpDown/Http/UpDownResponse.html", "name": "Biscolab\\UpDown\\Http\\UpDownResponse", "doc": "&quot;Class UpDownResponse&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownResponse", "fromLink": "Biscolab/UpDown/Http/UpDownResponse.html", "link": "Biscolab/UpDown/Http/UpDownResponse.html#method___construct", "name": "Biscolab\\UpDown\\Http\\UpDownResponse::__construct", "doc": "&quot;UpDownResponse constructor.&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownResponse", "fromLink": "Biscolab/UpDown/Http/UpDownResponse.html", "link": "Biscolab/UpDown/Http/UpDownResponse.html#method_setResponse", "name": "Biscolab\\UpDown\\Http\\UpDownResponse::setResponse", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownResponse", "fromLink": "Biscolab/UpDown/Http/UpDownResponse.html", "link": "Biscolab/UpDown/Http/UpDownResponse.html#method_parseResponse", "name": "Biscolab\\UpDown\\Http\\UpDownResponse::parseResponse", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownResponse", "fromLink": "Biscolab/UpDown/Http/UpDownResponse.html", "link": "Biscolab/UpDown/Http/UpDownResponse.html#method_toArray", "name": "Biscolab\\UpDown\\Http\\UpDownResponse::toArray", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownResponse", "fromLink": "Biscolab/UpDown/Http/UpDownResponse.html", "link": "Biscolab/UpDown/Http/UpDownResponse.html#method_detectError", "name": "Biscolab\\UpDown\\Http\\UpDownResponse::detectError", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownResponse", "fromLink": "Biscolab/UpDown/Http/UpDownResponse.html", "link": "Biscolab/UpDown/Http/UpDownResponse.html#method_checkHttpStatusCode", "name": "Biscolab\\UpDown\\Http\\UpDownResponse::checkHttpStatusCode", "doc": "&quot;Check HTTP status code (silent\/No exceptions!)&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownResponse", "fromLink": "Biscolab/UpDown/Http/UpDownResponse.html", "link": "Biscolab/UpDown/Http/UpDownResponse.html#method_getResult", "name": "Biscolab\\UpDown\\Http\\UpDownResponse::getResult", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownResponse", "fromLink": "Biscolab/UpDown/Http/UpDownResponse.html", "link": "Biscolab/UpDown/Http/UpDownResponse.html#method_setResult", "name": "Biscolab\\UpDown\\Http\\UpDownResponse::setResult", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownResponse", "fromLink": "Biscolab/UpDown/Http/UpDownResponse.html", "link": "Biscolab/UpDown/Http/UpDownResponse.html#method_getArrayResponse", "name": "Biscolab\\UpDown\\Http\\UpDownResponse::getArrayResponse", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownResponse", "fromLink": "Biscolab/UpDown/Http/UpDownResponse.html", "link": "Biscolab/UpDown/Http/UpDownResponse.html#method_setArrayResponse", "name": "Biscolab\\UpDown\\Http\\UpDownResponse::setArrayResponse", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownResponse", "fromLink": "Biscolab/UpDown/Http/UpDownResponse.html", "link": "Biscolab/UpDown/Http/UpDownResponse.html#method_getErrorMessage", "name": "Biscolab\\UpDown\\Http\\UpDownResponse::getErrorMessage", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownResponse", "fromLink": "Biscolab/UpDown/Http/UpDownResponse.html", "link": "Biscolab/UpDown/Http/UpDownResponse.html#method_setErrorMessage", "name": "Biscolab\\UpDown\\Http\\UpDownResponse::setErrorMessage", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownResponse", "fromLink": "Biscolab/UpDown/Http/UpDownResponse.html", "link": "Biscolab/UpDown/Http/UpDownResponse.html#method_getHttpStatusCode", "name": "Biscolab\\UpDown\\Http\\UpDownResponse::getHttpStatusCode", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Http", "fromLink": "Biscolab/UpDown/Http.html", "link": "Biscolab/UpDown/Http/UpDownResult.html", "name": "Biscolab\\UpDown\\Http\\UpDownResult", "doc": "&quot;Class UpDownResult&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownResult", "fromLink": "Biscolab/UpDown/Http/UpDownResult.html", "link": "Biscolab/UpDown/Http/UpDownResult.html#method___construct", "name": "Biscolab\\UpDown\\Http\\UpDownResult::__construct", "doc": "&quot;UpDownResult constructor.&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Http\\UpDownResult", "fromLink": "Biscolab/UpDown/Http/UpDownResult.html", "link": "Biscolab/UpDown/Http/UpDownResult.html#method_getData", "name": "Biscolab\\UpDown\\Http\\UpDownResult::getData", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Objects", "fromLink": "Biscolab/UpDown/Objects.html", "link": "Biscolab/UpDown/Objects/BaseObject.html", "name": "Biscolab\\UpDown\\Objects\\BaseObject", "doc": "&quot;Class BaseObject&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\UpDown\\Objects\\BaseObject", "fromLink": "Biscolab/UpDown/Objects/BaseObject.html", "link": "Biscolab/UpDown/Objects/BaseObject.html#method___construct", "name": "Biscolab\\UpDown\\Objects\\BaseObject::__construct", "doc": "&quot;CrudObject constructor.&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Objects\\BaseObject", "fromLink": "Biscolab/UpDown/Objects/BaseObject.html", "link": "Biscolab/UpDown/Objects/BaseObject.html#method_getPrimaryKey", "name": "Biscolab\\UpDown\\Objects\\BaseObject::getPrimaryKey", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Objects\\BaseObject", "fromLink": "Biscolab/UpDown/Objects/BaseObject.html", "link": "Biscolab/UpDown/Objects/BaseObject.html#method_all", "name": "Biscolab\\UpDown\\Objects\\BaseObject::all", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Objects\\BaseObject", "fromLink": "Biscolab/UpDown/Objects/BaseObject.html", "link": "Biscolab/UpDown/Objects/BaseObject.html#method_getEndpoint", "name": "Biscolab\\UpDown\\Objects\\BaseObject::getEndpoint", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Objects\\BaseObject", "fromLink": "Biscolab/UpDown/Objects/BaseObject.html", "link": "Biscolab/UpDown/Objects/BaseObject.html#method_getCollection", "name": "Biscolab\\UpDown\\Objects\\BaseObject::getCollection", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Objects\\BaseObject", "fromLink": "Biscolab/UpDown/Objects/BaseObject.html", "link": "Biscolab/UpDown/Objects/BaseObject.html#method_prepareApiPath", "name": "Biscolab\\UpDown\\Objects\\BaseObject::prepareApiPath", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Objects\\BaseObject", "fromLink": "Biscolab/UpDown/Objects/BaseObject.html", "link": "Biscolab/UpDown/Objects/BaseObject.html#method_getId", "name": "Biscolab\\UpDown\\Objects\\BaseObject::getId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Objects\\BaseObject", "fromLink": "Biscolab/UpDown/Objects/BaseObject.html", "link": "Biscolab/UpDown/Objects/BaseObject.html#method_getStaticEndpoint", "name": "Biscolab\\UpDown\\Objects\\BaseObject::getStaticEndpoint", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Objects", "fromLink": "Biscolab/UpDown/Objects.html", "link": "Biscolab/UpDown/Objects/Check.html", "name": "Biscolab\\UpDown\\Objects\\Check", "doc": "&quot;Class Check&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\UpDown\\Objects\\Check", "fromLink": "Biscolab/UpDown/Objects/Check.html", "link": "Biscolab/UpDown/Objects/Check.html#method_getMetrics", "name": "Biscolab\\UpDown\\Objects\\Check::getMetrics", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Objects\\Check", "fromLink": "Biscolab/UpDown/Objects/Check.html", "link": "Biscolab/UpDown/Objects/Check.html#method_getDowntimes", "name": "Biscolab\\UpDown\\Objects\\Check::getDowntimes", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Objects", "fromLink": "Biscolab/UpDown/Objects.html", "link": "Biscolab/UpDown/Objects/CrudObject.html", "name": "Biscolab\\UpDown\\Objects\\CrudObject", "doc": "&quot;Class CrudObject&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\UpDown\\Objects\\CrudObject", "fromLink": "Biscolab/UpDown/Objects/CrudObject.html", "link": "Biscolab/UpDown/Objects/CrudObject.html#method_create", "name": "Biscolab\\UpDown\\Objects\\CrudObject::create", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Objects\\CrudObject", "fromLink": "Biscolab/UpDown/Objects/CrudObject.html", "link": "Biscolab/UpDown/Objects/CrudObject.html#method_read", "name": "Biscolab\\UpDown\\Objects\\CrudObject::read", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Objects\\CrudObject", "fromLink": "Biscolab/UpDown/Objects/CrudObject.html", "link": "Biscolab/UpDown/Objects/CrudObject.html#method_update", "name": "Biscolab\\UpDown\\Objects\\CrudObject::update", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Objects\\CrudObject", "fromLink": "Biscolab/UpDown/Objects/CrudObject.html", "link": "Biscolab/UpDown/Objects/CrudObject.html#method_delete", "name": "Biscolab\\UpDown\\Objects\\CrudObject::delete", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Objects", "fromLink": "Biscolab/UpDown/Objects.html", "link": "Biscolab/UpDown/Objects/Event.html", "name": "Biscolab\\UpDown\\Objects\\Event", "doc": "&quot;Class Event&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Objects", "fromLink": "Biscolab/UpDown/Objects.html", "link": "Biscolab/UpDown/Objects/Node.html", "name": "Biscolab\\UpDown\\Objects\\Node", "doc": "&quot;Class Node&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\UpDown\\Objects\\Node", "fromLink": "Biscolab/UpDown/Objects/Node.html", "link": "Biscolab/UpDown/Objects/Node.html#method_getIpV4", "name": "Biscolab\\UpDown\\Objects\\Node::getIpV4", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Objects\\Node", "fromLink": "Biscolab/UpDown/Objects/Node.html", "link": "Biscolab/UpDown/Objects/Node.html#method_getIpV6", "name": "Biscolab\\UpDown\\Objects\\Node::getIpV6", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Objects\\Node", "fromLink": "Biscolab/UpDown/Objects/Node.html", "link": "Biscolab/UpDown/Objects/Node.html#method_getCollection", "name": "Biscolab\\UpDown\\Objects\\Node::getCollection", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Objects", "fromLink": "Biscolab/UpDown/Objects.html", "link": "Biscolab/UpDown/Objects/WebHook.html", "name": "Biscolab\\UpDown\\Objects\\WebHook", "doc": "&quot;Event Node&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\UpDown\\Objects\\WebHook", "fromLink": "Biscolab/UpDown/Objects/WebHook.html", "link": "Biscolab/UpDown/Objects/WebHook.html#method_read", "name": "Biscolab\\UpDown\\Objects\\WebHook::read", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\Objects\\WebHook", "fromLink": "Biscolab/UpDown/Objects/WebHook.html", "link": "Biscolab/UpDown/Objects/WebHook.html#method_update", "name": "Biscolab\\UpDown\\Objects\\WebHook::update", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Types", "fromLink": "Biscolab/UpDown/Types.html", "link": "Biscolab/UpDown/Types/Checks.html", "name": "Biscolab\\UpDown\\Types\\Checks", "doc": "&quot;Class Checks&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Types", "fromLink": "Biscolab/UpDown/Types.html", "link": "Biscolab/UpDown/Types/DownTime.html", "name": "Biscolab\\UpDown\\Types\\DownTime", "doc": "&quot;Class DownTime&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Types", "fromLink": "Biscolab/UpDown/Types.html", "link": "Biscolab/UpDown/Types/DownTimes.html", "name": "Biscolab\\UpDown\\Types\\DownTimes", "doc": "&quot;Class DownTimes&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Types", "fromLink": "Biscolab/UpDown/Types.html", "link": "Biscolab/UpDown/Types/Metrics.html", "name": "Biscolab\\UpDown\\Types\\Metrics", "doc": "&quot;Class Metrics&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Types", "fromLink": "Biscolab/UpDown/Types.html", "link": "Biscolab/UpDown/Types/Nodes.html", "name": "Biscolab\\UpDown\\Types\\Nodes", "doc": "&quot;Class Nodes&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Types", "fromLink": "Biscolab/UpDown/Types.html", "link": "Biscolab/UpDown/Types/Requests.html", "name": "Biscolab\\UpDown\\Types\\Requests", "doc": "&quot;Class Requests&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Types", "fromLink": "Biscolab/UpDown/Types.html", "link": "Biscolab/UpDown/Types/Ssl.html", "name": "Biscolab\\UpDown\\Types\\Ssl", "doc": "&quot;Class Ssl&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Types", "fromLink": "Biscolab/UpDown/Types.html", "link": "Biscolab/UpDown/Types/Timings.html", "name": "Biscolab\\UpDown\\Types\\Timings", "doc": "&quot;Class Metrics&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown\\Types", "fromLink": "Biscolab/UpDown/Types.html", "link": "Biscolab/UpDown/Types/WebHooks.html", "name": "Biscolab\\UpDown\\Types\\WebHooks", "doc": "&quot;Class WebHooks&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\UpDown", "fromLink": "Biscolab/UpDown.html", "link": "Biscolab/UpDown/UpDown.html", "name": "Biscolab\\UpDown\\UpDown", "doc": "&quot;Class UpDown&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\UpDown\\UpDown", "fromLink": "Biscolab/UpDown/UpDown.html", "link": "Biscolab/UpDown/UpDown.html#method___construct", "name": "Biscolab\\UpDown\\UpDown::__construct", "doc": "&quot;Api constructor.&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\UpDown", "fromLink": "Biscolab/UpDown/UpDown.html", "link": "Biscolab/UpDown/UpDown.html#method_init", "name": "Biscolab\\UpDown\\UpDown::init", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\UpDown", "fromLink": "Biscolab/UpDown/UpDown.html", "link": "Biscolab/UpDown/UpDown.html#method_setInstance", "name": "Biscolab\\UpDown\\UpDown::setInstance", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\UpDown", "fromLink": "Biscolab/UpDown/UpDown.html", "link": "Biscolab/UpDown/UpDown.html#method_instance", "name": "Biscolab\\UpDown\\UpDown::instance", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\UpDown", "fromLink": "Biscolab/UpDown/UpDown.html", "link": "Biscolab/UpDown/UpDown.html#method_getKey", "name": "Biscolab\\UpDown\\UpDown::getKey", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\UpDown", "fromLink": "Biscolab/UpDown/UpDown.html", "link": "Biscolab/UpDown/UpDown.html#method_setKey", "name": "Biscolab\\UpDown\\UpDown::setKey", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\UpDown", "fromLink": "Biscolab/UpDown/UpDown.html", "link": "Biscolab/UpDown/UpDown.html#method_getClient", "name": "Biscolab\\UpDown\\UpDown::getClient", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\UpDown", "fromLink": "Biscolab/UpDown/UpDown.html", "link": "Biscolab/UpDown/UpDown.html#method_setClient", "name": "Biscolab\\UpDown\\UpDown::setClient", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\UpDown", "fromLink": "Biscolab/UpDown/UpDown.html", "link": "Biscolab/UpDown/UpDown.html#method_getServiceEndpoint", "name": "Biscolab\\UpDown\\UpDown::getServiceEndpoint", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\UpDown", "fromLink": "Biscolab/UpDown/UpDown.html", "link": "Biscolab/UpDown/UpDown.html#method_createRequest", "name": "Biscolab\\UpDown\\UpDown::createRequest", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\UpDown", "fromLink": "Biscolab/UpDown/UpDown.html", "link": "Biscolab/UpDown/UpDown.html#method_get", "name": "Biscolab\\UpDown\\UpDown::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\UpDown", "fromLink": "Biscolab/UpDown/UpDown.html", "link": "Biscolab/UpDown/UpDown.html#method_post", "name": "Biscolab\\UpDown\\UpDown::post", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\UpDown", "fromLink": "Biscolab/UpDown/UpDown.html", "link": "Biscolab/UpDown/UpDown.html#method_put", "name": "Biscolab\\UpDown\\UpDown::put", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\UpDown\\UpDown", "fromLink": "Biscolab/UpDown/UpDown.html", "link": "Biscolab/UpDown/UpDown.html#method_delete", "name": "Biscolab\\UpDown\\UpDown::delete", "doc": "&quot;&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


