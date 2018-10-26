function succeedAlways() {
  return {
    type: 'SUCCEED_ALWAYS',
    meta: {
      offline: {
        effect: { url: '/succeed-always' },
        commit: { type: 'SUCCEED_ALWAYS_SUCCESS' },
        rollback: { type: 'SUCCEED_ALWAYS_FAILURE' }
      }
    }
  };
}


function followUser(userId) {
  return {
    type: 'FOLLOW_USER_REQUEST',
    payload: { userId },
    meta: {
      offline: {
        effect: { url: '/succeed-post', method: 'POST', json: { userId: userId } },
        commit: { type: 'FOLLOW_USER_REQUEST_SUCCESS' },
        rollback: { type: 'FOLLOW_USER_REQUEST_FAILURE' }
      }
    }
  };
}


function succeedSometimes() {
  return {
    type: 'SUCCEED_SOMETIMES',
    meta: {
      offline: {
        effect: { url: '/succeed-sometimes' },
        commit: { type: 'SUCCEED_SOMETIMES_SUCCESS' },
        rollback: { type: 'SUCCEED_SOMETIMES_FAILURE' }
      }
    }
  };
}

function failSometimes() {
  return {
    type: 'FAIL_SOMETIMES',
    meta: {
      offline: {
        effect: { url: '/fail-sometimes' },
        commit: { type: 'FAIL_SOMETIMES_SUCCESS' },
        rollback: { type: 'FAIL_SOMETIMES_FAILURE' }
      }
    }
  };
}

export { succeedAlways, succeedSometimes, failSometimes, followUser };
