pipeline {
    agent any
    tools {
        maven 'M3'
        jdk 'JDK11'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/tejaskhairkar17/js-testDemo-tejas.git'
            }
        }
        stage('Build') {
            steps {
                bat 'mvn clean install'
            }
        }
    }
}