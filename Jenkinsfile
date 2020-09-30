pipeline {
  agent any
  tools {
    nodejs 'default-nodejs'
  }
  stages {
    stage('Startup') {
      steps {
        script {
          shell 'npm install'
        }
      }
    }
    stage('Test') {
      steps {
        script {
          shell 'npm run coverage:prod'
        }
      }
      post {
        always {
          publishHTML target: [
            allowMissing         : false,
            alwaysLinkToLastBuild: false,
            keepAll             : true,
            reportDir            : 'output/coverage/jest',
            reportFiles          : 'index.html',
            reportName           : 'Test Report'
          ]
        }
      }
    }
    stage('Build') {
      steps {
        script {
          shell 'npm start'
          shell 'npm pack'
        }
      }
    }
    // stage('Deploy') {
    //   when {
    //     expression {
    //       currentBuild.result == null || currentBuild.result == 'SUCCESS'
    //     }
    //   }
    //   steps {
    //     script {
    //       def server = Artifactory.server 'My_Artifactory'
    //       uploadArtifact(server)
    //     }
    //   }
    // }
  }
}
def uploadArtifact(server) {
  def uploadSpec = """{
            "files": [
              {
                "pattern": "continuous-test-code-coverage-guide*.tgz",
                "target": "npm-stable/"
              }
           ]
          }"""
  server.upload(uploadSpec)
def buildInfo = Artifactory.newBuildInfo()
  server.upload spec: uploadSpec, buildInfo: buildInfo
  server.publishBuildInfo buildInfo
}
