pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 2000:3000'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Deliver for mock-api') {
              when {
                  branch 'R1'
              }
              steps {
                  sh './jenkins/scripts/mock.sh'
              }
    }
    stage('Deliver for development') {
              when {
                  branch 'R1'
              }
              steps {
                  sh './jenkins/scripts/deliver-for-development.sh'
                  input message: 'Finished using the web site? (Click "Proceed" to continue please lets go)'
                  
              }
    }
  }
}