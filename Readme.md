aurelia-monterey-ts
==========
### Aurelia Template Application Generated From Monterey & Using TypeScript

This module ...


#### Prerequisites:

Some tasks to complete before you get started

  * Install NodeJs and NPM
  * IntelliJ
    * Install and Enable *Command Line Tools Plugin*
  * 
  * 


Installation
------------

Setup and Run Application

  * IntelliJ
    * Create new project by importing from Git
    * Tools > Run Command > npm install ** Do NOT Add Files to Git**
    * Configure TypeScript
      * Preferences > Languages & Frameworks > TypeScript
        * Node interpreter. (e.g. /usr/local/node/bin)
        * TypeScript version.  It should detect this automatically.  If not use custom configuration. (e.g. Custom > *project*/node_modules/typescript/lib).
        * Use TypeScript Service. Confgure > Code Completion
        * Enable TypeScript Compiler  **&#8856;**
    * Configure TSLint
        * Enable &#10004; 
        * Node interpreter. (e.g. /usr/local/node/bin)
        * TSLint package. (e.g. /Users/rstaley/GitHub/aurelia-monterey-ts/node_modules/tslint)
        * Configuration file
          * search for tslint.json **&#8857;**
  * *Run Command* **au run**
  * Browse to url indicated in console log (e.g. http://localhost:9000)
