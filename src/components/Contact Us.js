import{useState} from 'react';
import ReactDOM from "react-dom/client";
import ContactUs from '../components/About Us';
  
    function FavoriteColor() {
      const [color, setColor] = useState("red");

      return (  
        <>
        <div className="mt-10">
          <h1>My favorite color is {color}!</h1>
          <button
            type="button"
            onClick={() => setColor("blue")}
          >Blue</button>
        </div>
        </>
          
     

// const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<FavoriteColor />);
    

  );
}

export default ContactUs;
