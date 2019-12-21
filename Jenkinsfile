pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Deliver for development') {
              when {
                  branch 'development'
              }
              steps {
                  sh './jenkins/scripts/deliver-for-development.sh'
                  input message: 'Finished using the web site? (Click "Proceed" to continue)'
                  sh './jenkins/scripts/kill.sh'
              }
    }
  }
}