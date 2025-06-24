pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    resuseNode true
                }
            }
            steps {
               sh '''
               echo "Take the production build"
               ls -la
               npm ci
               npm run build
               ls -la
               '''
            }
        }
    }
}
