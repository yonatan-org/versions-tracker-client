<h1 id="versions-display"><strong>Versions Display</strong></h1>

<p>This is the front end application of the versions display application, you can get the server side application here: <a href="https://github.com/yonatankr/versions-manager-api">Versions Manager Api</a>.</p>

<p><img src="https://github.com/yonatankr/versions-display/blob/master/version-tracker.png" alt="Deploying state" title=""></p>

<h2 id="prerequisites"><strong>Prerequisites:</strong></h2>

<p>This service uses:</p>

<ol>
<li>Node.js (Express)</li>
</ol>



<h2 id="getting-started"><strong>Getting Started:</strong></h2>

<p>Manual: <br>
This application is based on the react-create-app framework, fire it up by:</p>

<pre><code>npm start
</code></pre>



<h2 id="loading-initial-data"><strong>Loading Initial Data:</strong></h2>

<p>The application will make a call to <strong><em>[configurableHost]/api/versions</em></strong>  and would expect to receive the following object:</p>

<pre><code>{  
   "program1":[  
      {  
         "projectName":"Program1",
         "buildStatus":"init",
         "commits":[
            {  
               "username":"deverloper1",
               "commit_message":"commit message",
               "imageUrl":"https://randomuser.me/api/portraits/women/97.jpg"
            },
            {  
               "username":"developer2",
               "commit_message":"commit message 2",
               "imageUrl":"https://randomuser.me/api/portraits/women/7.jpg"
            }
         ],
         "versionData":{  
            "commitId":"sdfsdfsdfsdf-sdfsdfsdf",
            "version":"1.24",
            "buildTime":"2017-09-29 13:28:39",
            "environment":"Production"
         }
      },
      {  
         "projectName":"Program1",
         "buildStatus":"complete",
         "commits":[
            {  
               "username":"developer1",
               "commit_message":"commit message",
               "imageUrl":"https://randomuser.me/api/portraits/men/94.jpg"
            },
            {  
               "username":"deverloper2",
               "commit_message":"commit message 2",
               "imageUrl":"https://randomuser.me/api/portraits/women/15.jpg"
            }
         ],
         "versionData":{  
            "commitId":"sdfsdfsdfsdf-sdfsdfsdf",
            "version":"1.24",
            "buildTime":"2017-09-29 13:28:39",
            "environment":"Production"
         }
      }
   ]
}
</code></pre>

<h2 id="receiving-updates-from-server">Receiving Updates From Server:</h2>

<p>The back end service will update the client using <a href="http://Socket.IO">Socket.IO</a> by sending the event : <strong>“versionEvent”</strong> which can be</p>

<pre><code>socket.on('versionEvent', versionEvent =&gt; {
    notifyClients(versionEvent);
})
</code></pre>
