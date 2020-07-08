#### For Cassandra NoSQL DBMS
  1. Installed using Homebrew, which is a package manager for OS X
    `ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"`
  2. *Cassandra* needs pip, setuptools, Python 2.7, and Java 8 to work
      version check `java -version` & `python --version`
      `sudo easy_install pip`
      `pip install --upgrade pip setuptools`
      `brew install python@2.7` for the most current version 2
      `brew tap AdoptOpenJDK/openjdk` then `brew cask install adoptopenjdk8`
  3. Install *Cassandra* `brew install cassandra`
  4. Now some annoyance:
    Since Java 8 version might now be the one we need, rollback the Java version to 8:
    ``export JAVA_HOME=`/usr/libexec/java_home -v 1.8` ``
  5. To run the Cassandra service:
    `brew services start cassandra`
    `cassandra -f` which keeps it running in the command line (Ctrl+C to kill) When it stops producing outcome, it's done running
    In a different terminal, connect to the Cassandra database with `cqlsh`