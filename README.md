# Node Typescript Boilerplate

It is a starter kit to create REST API in express with typescript.

## Usage

### Developers

#### Installation

1. clone solution
   To install the solution, first clone the repo to the host server

   ```
   git clone git@github.com:ahmedjehanzaib/project-name.git
   ```

   In some cases, you may need to activate your ssh-agent to link your local private key to the command in the following manner:

   ```
   eval $(ssh-agent -s) && $(ssh-add /path/to/your/.ssh/id_rsa; git pull git@github.com:ahmedjehanzaib/project-name.git)
   ```

2. build docker container (skip this part as its build automatically using dockerhub and watchtower)
   move to cloned folder.
   ```
   cd project-name
   ```
   build docker container by passing the `npm token` as a build parameter.
   ```
   sudo docker build -t api:project-name --build-arg NPM_SECRET=<npm token> .
   ```
3. run the container
   run the container using the `--net` flag, linking the container to the `bridge` network on server.
   ```
   sudo docker run --net 'bridge' -p 3010:3010 -d --name project-name --restart always api:project-name
   ```
4. test server
   open http://localhost:3010/api/v1/ping in your browser.

### Technical users

## Issues

Any issues found on usage of this solution (more especially failed tests found on test status of solution), post your issues onto the corresponding proxy API page:

- [Collection](https://github.com/ahmedjehanzaib/project-name.git/issues)
