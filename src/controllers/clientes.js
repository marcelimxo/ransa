
/* eslint-disable no-console */
import { addUserPhotoToStorage } from '../models/users.js';
import { profilePageView } from '../views/profile.js';
/* 
export default async () => {
  // Obtenemos el usuario que accedió
  const user = await firebase.auth().currentUser;
  // Invocamos nuestra vista del perfil
  await profilePageView(user);
  const avatarUploader = document.getElementById('submit');
  console.log(avatarUploader);
  // Capturamos los cambios realizados por el usuario
  avatarUploader.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    const storageRef = await addUserPhotoToStorage(file.name);
    const task = storageRef.put(file);
    console.log(task);
  });
}; */