pipeline {
  agent any
  stages {
    stage('Clone Repo') {
      steps {
        git 'https://github.com/asmitsharma1/CI-CD-PIPELINE.git'
      }
    }
    stage('Build Docker Image') {
      steps {
        sh 'docker build -t cicd-app .'
      }
    }
    stage('Deploy') {
      steps {
        sh '''
        docker stop cicd || true
        docker rm cicd || true
        docker run -d --name cicd -p 3000:3000 cicd-app
        '''
      }
    }
  }
}
