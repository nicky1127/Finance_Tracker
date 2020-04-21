pipeline {
  agent {
    docker {
      image 'mhart/alpine-node:12'
      args '-p 3003:3003 -p 5000:5000' 
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
                branch 'development'
            }
            steps {
                sh './jenkins/scripts/deliver-for-development.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }

    stage('Deploy for production') {
              when {
                  branch 'R1'
              }
              steps {
                  sh './jenkins/scripts/deploy-for-production.sh'
                  input message: 'Finished using the web site? (Click "Proceed" to continue please lets go)'
              }
    }
  }
}