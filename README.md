<h1 id="versions-display"><strong>Versions Display</strong></h1>
<p>This is the front end application of the versions display application, you can get the server side application here: <a href="https://github.com/yonatankr/versions-manager-api">Versions Manager Api</a>.</p>
<h2 id="prerequisites"><strong>Prerequisites:</strong></h2>
<p>This service uses:</p>
<ol>
<li>Node.js (Express)</li>
</ol>
<h2 id="getting-started"><strong>Getting Started:</strong></h2>
<p>Manual:
This application is based on the react-create-app framework, fire it up by:</p>
<pre><code>npm start
</code></pre>
<h2 id="loading-initial-data"><strong>Loading Initial Data:</strong></h2>
<p>The application will make a call to <strong><em>[configurableHost]/api/versions</em></strong>  and would expect to receive the following object:</p>
<pre><code>enter code here
</code></pre>
<h2 id="receiving-updates-from-server">Receiving Updates From Server:</h2>
<p>The back end service will update the client using <a href="http://Socket.IO">Socket.IO</a> by sending the event : <strong>“versionEvent”</strong> which can be</p>
<pre><code>socket.on('versionEvent', versionEvent =&gt; {
    notifyClients(versionEvent);
})
</code></pre>

