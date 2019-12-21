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
    stage('Deliver') {
            when {
                branch 'R1'
            }
            steps {
                input message: 'Finished using the web site? (Click "Proceed" to proceed)'
            }
        }

  }
}