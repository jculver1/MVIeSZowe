pipeline {
    agent { 
        dockerfile true
    }
    /* agent {
        docker {
            image 'node:8-alpine'
            args '-p 3000:3000'
        }
    } */
    environment {
        HOME='.'
        MVD_DESKTOP_DIR='../zlux-app-manager/virtual-desktop'
    }
    stages {
        stage('Build') {
            steps {
                echo 'build'
                //sh 'npm i lerna'
                //sh 'yarn install --no-ci'
                //sh 'lerna bootstrap --verbose'
            }
        }
        stage('Test') {
            steps {
                echo 'test'
                //sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                echo 'deliver'
                //sh './jenkins/scripts/deliver.sh'
                //input message: 'Finished using the web site? (Click "Proceed" to continue)'
                //sh './jenkins/scripts/kill.sh'
            }
        }
    }
}