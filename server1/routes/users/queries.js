const GET_ALL_USERS = `query GET_ALL_USERS {
    test_users {
      created_at
      email
      id
      name
      updated_at
    }
  }`;

const GET_USER = `query GET_USER($id: uuid = "") {
    test_users_by_pk(id: $id) {
      created_at
      email
      id
      name
      updated_at
    }
  }`;

const INSERT_USER = `mutation MyMutation($email: String = "", $name: String = "") {
    insert_test_users_one(object: {name: $name, email: $email}) {
      id
    }
  }`;

const UPDATE_USER = `mutation MyMutation($id: uuid = "", $name: String = "") {
    update_test_users_by_pk(pk_columns: {id: $id}, _set: {name: $name}) {
      email
      id
      name
      updated_at
    }
  }`;

module.exports = {
  GET_ALL_USERS,
  GET_USER,
  INSERT_USER,
  UPDATE_USER,
};
