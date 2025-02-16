pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/YOUR_USERNAME/node-react-app.git'
            }
        }
        stage('Install Backend Dependencies') {
            steps {
                sh 'cd backend && npm install'
            }
        }
        stage('Run Backend') {
            steps {
                sh 'cd backend && nohup node server.js &'
            }
        }
        stage('Install Frontend Dependencies') {
            steps {
                sh 'cd frontend && npm install'
            }
        }
        stage('Build Frontend') {
            steps {
                sh 'cd frontend && npm run build'
            }
        }
    }
}
