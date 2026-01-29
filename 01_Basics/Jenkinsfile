pipeline {
    agent any

    environment {
        NODEJS_HOME = "C:\\Program Files\\nodejs" // adjust if Node is installed elsewhere
        PATH = "${env.NODEJS_HOME};${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/tejaskhairkar17/js-testDemo-tejas.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // This will not fail the pipeline if no tests exist
                bat 'npm test -- --passWithNoTests'
            }
        }

        stage('Build / Other Scripts') {
            steps {
                echo 'You can add build steps or scripts here if needed'
            }
        }
    }

    post {
        success {
            echo 'Pipeline finished successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}
