pipeline {
    agent any
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
        stage('Run Tests / Scripts') {
            steps {
                // Run whatever script you have defined in package.json
                bat 'npm test'
                // or run a custom script
                // bat 'npm run build'
            }
        }
    }
}
