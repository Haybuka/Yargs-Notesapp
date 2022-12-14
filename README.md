<!-- https://github.com/Haybuka/Yargs-Notesapp.git -->

# Yargs-Notesapp
Creating a command line notes app with yargs as a parser, and a json file as database.

Modules
- Chalk : Prettier,  but on terminal.
- Yargs : Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.
- File system module (fs)

What i learned
   In this project, i was able to learn proper usage of the file system and how it connects with other modules (yargs, chalk) and their manipulation. Also, it brings to question the use of proper folder structure and syntax related to NodeJs (import as in the require usage, and export for locally made folders).

Continued Development
   This project can further be expanded using yargs, to query database, or pass and parse in values that require extra input as related to terminal.

For more usage of the modules, do reference their documentations on npmjs.com

Run commands
  
  - Add commands
    node app add --title="Note title" --body="Note body"

  - Remove command
    node app remove --title="tempest"

  - List command
    node app list 
      // list all available notes
    
  - Read command
    node app read --title="title of note"
      // prints out a note from the json


Other utilities avalaible
   - node app --help
      To see at a glance all available commands and their description

   - node app --version
     To check for yargs version.


Note :
   The yargs.argv at the last line was later replaced with the yargs.parse(), this removes the need for an extra console.log(), and also helps to show the console as we want.