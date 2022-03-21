import StorageForm from './components/StorageForm';
import './LocalStorageApp.css'

function LocalStorageApp() {
  return (
    <div className="storageContainer">
        <div className='formBox'>
          <StorageForm />
        </div>

    </div>
  );
}

export default LocalStorageApp;