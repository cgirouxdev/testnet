const Hubkit = require('./hubkit.js')


const COMMIT_FIELDS_TO_RETAIN = `
  tree {
    oid
    commitUrl
  }
  parents (first: 100) {
    pageInfo {hasNextPage}
    nodes {
      oid
    }
  }
  oid
  message
  author {
    date
    user {
      databaseId
    }
  }
  committer {
    date
    user {
      databaseId
    }
  }
  authors(first: 100) {
    pageInfo {hasNextPage}
    nodes {
      email
      name
      user {
        databaseId
      }
    }
  }
`;

const COMMITS_QUERY = `
  query ($owner: String!, $repo: String!, $prNumber: Int!, $after: String) {
    repository(name: $repo, owner: $owner) {
      pullRequest(number: $prNumber) {
        commits(first: 3, after: $after) {
          pageInfo {hasNextPage, endCursor}
          nodes {
            commit {
              ${COMMIT_FIELDS_TO_RETAIN}
            }
          }
        }
      }
    }
  }
`;



gh.graph(COMMITS_QUERY, {allPages: false, variables: {repo: 'testnet', owner: 'cgirouxdev', prNumber: 85}}).then(res => {
   console.log('RESULT ->', res)
}).catch(err => console.log('ERR ->', err));


