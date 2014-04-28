## Lesson Goals

* Learn how to get around the terminal
* Setting up Git and Github
* Using curl to grab files online
* python basics (int, float, str, list, tuple)
* Piping data into python

### Practice: Unix

The are following commands to use in your [terminal](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line)

* `pwd`, find where we are in the Volume.
* `ls`, list all the files and folders in our current location. `ls` accepts a lot of arguments to view extended information about the files, like permissions, file size, etc.
    * `ls -l`, long format, displaying Unix file types, permissions, number of hard links, owner, group, size, last-modified date and filename
    * `ls -a`, lists all files in the given directory, including those whose names start with "." (which are hidden files in Unix).
    * `ls -R`, recursively lists subdirectories.
    * `ls -t`, sort the list of files by modification time.
* `sudo`, prepend before a command to give it superuser permissions.
* `cat`, puts a file through standard in/out. Generally not as useful as...
* `less`, a simple file viewer in bash. Here we can use
	* the arrows to move around
	* `/` to run a regex match
	* `q` to go back to the command line
* `cd`, change directory
    * `cd ..`, to move up to the parent directory
* `mkdir`, make a new directory
* `mv`, move a file, also used for renaming
* `rm`, remove a file
    * `rm -r`, recorsively remove a directory

#### Try it out

```bash
cd # return to user directory
touch file.txt
ls # Lists our file!
mv file.txt file_new.txt
ls # Our file changed names!
cp file_new.txt file_copied.txt
ls # File was copied!
echo 'Files can be written this way as well' > text_file.txt
less text_file.txt
```

and using `curl` to download files. 

```bash
# Downloading a file using curl
curl http://stat.columbia.edu/~rachel/datasets/nyt1.csv > nytimes.csv 

# With longer files, we can use head or tail to read the first few or last few lines.
head nytimes.csv
tail nytimes.csv
```

**Advanced** [ZSH](http://www.maclife.com/article/columns/terminal_101_better_shell_zsh) is a better shell, with [Oh-My-ZSH](https://github.com/robbyrussell/oh-my-zsh) being a community-curated set of extensions.


### Practice: Git & GitHub

Follow the [instructions](./Guides-01-:-Git-and-GitHub) to setup Git & a GitHub account.

1. Make a directory for your Final Project in `/finals/` with `mkdir YOURNAME`.
1. Move into that new directory with `cd YOURNAME`
1. `touch readme.md` to start the documentation for your final project.
1. `echo '# Data Science Final Project' > readme.md` to add a header.
1. Repeat this process for your Lessons in `/lessons/` with `mkdir YOURNAME`

**Advanced** [Hub](http://hub.github.com/) is a command-line wrapper for git that makes you better at GitHub.

    
### Practice: Python

Open up your Python REPL with

```bash
ipython
``` 

If Anaconda was installed correctly, we should see this referenced as python opens up

```python
1 # Integers
2
1.0 # Floats
2.0
0 # Ints, but can also mean True or False
1
0 == True
1 == True
'string' # strings
'A whole sentence'
[1, 2, 3] # list, mutable (can change)
(1, 2, 3) # tuple, immutable (can't be edited)
```

We're going to write our first class Python script that sums up a whole column of text from a comma seperated file.

```python
#!/usr/bin/python
# Import required libraries
import sys

# Start a counter and store the textfile in memory
count = 0
lines = sys.stdin.readlines()
lines.pop(0)

# For each line, find the sum of index 2 in the list.
for line in lines:
  count = count + int(line.strip().split(',')[2])

print count
```

Let's make this file executable, and run it!

```bash
chmod +X counter.py
cat nytimes.csv | python counter.py
```

We can print a more robust line in bash, so let's change the last line to this instead:

```python
print 'Impressions Sum:', count
```

### Classwork

1. Right now the python script finds a sum of the impressions column. Update it to also return:
	1. The average age in the file
	1. Click through rate (avg clicks per impression)
	1. The oldest person in the file
1. This should all be write out to the standard out using a few lines with "print"
1. When you have a python script that works, save it in your personal homework directory under lesson01 .

### Extra Credit!

How can you change the Python script a bit to:

* Cleanly ignore all string values?
* Output the results into a new text file? Read a guide on [file manipulation](http://www.pythonforbeginners.com/systems-programming/reading-and-writing-files-in-python/) to get you started.