pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            dir '.'
        }
    }

    environment {
        CHROME_BIN = '/usr/bin/chromium-browser'
    }

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
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

        stage('Test') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    echo "Test stage"
                    test -f dist/typeorm-angular-example/index.html
                    #npm ci
                    npm run test:ci
                '''
            }
        }
    }
}
