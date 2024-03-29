//import DAL from '../State/DALUtils';
//import $ from "jquery";

const mainReducer = (
  state = {}, actionData) =>
  {
    switch(actionData.type){
      case 'SAVEUSER' : {
        var usersArr = state.users;
        usersArr.push(actionData.delta);
        return {...state, users:usersArr }
      
      }
      case 'UPDATEUSER' : {
        let userID= actionData.delta['id'];
        let usersCopy = JSON.parse(JSON.stringify(state.users))
        var index = usersCopy.map(x => {
          return x.id;
        }).indexOf(userID);
        usersCopy[index] =  actionData.delta;
        return {...state, users:usersCopy }
      
      }
      case 'CREATEUSERSLIST' : {
        return {...state, users:actionData.delta};
      
      }

      case 'CREATEDATA' : {
        return {...state, users:actionData.delta.users,todos:actionData.delta.todos, usersBackUp:actionData.delta.users};
      
      }
      case 'GETUSERSLIST' : {
        return {...state, usersBackUp:state.users};
      
      }
      case 'CREATEPOSTSLIST' : {
        return {...state, posts:actionData.delta}
      
      }
      case 'CREATETODOSLIST' : {
        return {...state, todos:actionData.delta}
      
      }
       case 'UPDATETODO' : {
        var postId= actionData.delta.id;
         let todosCopy = JSON.parse(JSON.stringify(state.todos))
         var indexa = todosCopy.map(x => {
           return x.id;
         }).indexOf(postId);
         todosCopy[indexa] =  actionData.delta;
        return {...state, todos:todosCopy };
      
      }
      case 'DELETEUSER' : {
        let userID= actionData.delta;
        let usersCopy = state.users;
        let index = usersCopy.map(x => {
          return x.id;
        }).indexOf(userID);
        usersCopy.splice(index,1);
        return {...state, users:usersCopy};
        
      }
      case 'ADDNEWUSER' : {
        let usersArray = state.users;
        let usersLength = usersArray.length - 1;
        let newID = usersArray[usersLength]["id"] + 1;
        let newUser = {id: newID, name: actionData.delta.name, email: actionData.delta.email ,address: { street: "", city: "",zipcode: ""}};
        usersArray.push(newUser);
        return { ...state, users :  usersArray}
      
      }

      case 'ADDNEWTODO' : {
        let todosArray = state.todos;
        let todosLength = todosArray.length - 1;
        let newID = todosArray[todosLength]["id"] + 1;
        let newTodo = {userId: parseInt(actionData.delta.userID), id: newID, title: actionData.delta.title, completed: false};
        todosArray.push(newTodo);
       
        return { ...state, todos :  todosArray}
      
      }

      case 'ADDNEWPOST' : {
        let postsArray = state.posts;
        let postsLength = postsArray.length - 1;
        let newID = postsArray[postsLength]["id"] + 1;
        let newTodo = {userId: parseInt(actionData.delta.userID), id: newID, title: actionData.delta.title, body: actionData.delta.title};
        postsArray.push(newTodo);
       
        return { ...state, posts :  postsArray}
      
      }

      case 'SETACTIVEUSER':{
        var activeUser = actionData.delta;
        return { ...state, activeUser : activeUser}
      }

     
      default: return state
    }
}

export default mainReducer;