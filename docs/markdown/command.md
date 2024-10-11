# Command
BynixScript has commands that can help you use BynixScript more easily.
1. **Execution command**
    - **bsr command**:
      This command is used to run BynixScript without compiling first:
      ```
      bsr path/to/script.bs
      ```
    - **bst command**:
      This command is used to compile the BynixScript file:
      ```
      bst path/to/script.bs
      ```
    - **bsp command**:
      This command is used to print the results of the translation of the BynixScript code to the cli:
      ```
      bsp path/to/script.bs
      ```
    - **bsd command**:
      This command is used to delete files:
      ```
      bsd path/to/script.bs
      ```
2. **Help command**
    - **Display help**:
      If you want to see help, you can write:
      ```
      bynixscript --help
      
      # or shorter
      bs -h
      ```
    - **Display version**:
      If you want to see the current version of BynixScript you are using, you can see it with the command:
      ```
      bynixscript --version
      
      # or shorter
      bs -v
      ```
    - **Display download**:
      ```
      bynixscript --download [--day, --week, --month]
      
      # or shorter
      bs -d [-d, -w, -m]
      ```