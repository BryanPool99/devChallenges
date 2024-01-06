import "./App.css";
import BlogCard from "./components/BlogCard";

function App() {
  return (
    <div className="App">
      <BlogCard
        image={require('./assets/images/cactus_img.jpg')}
        tag="Design"
        title="Embracing Minimalism"
        content="From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity."
        author="Annie Spratt"
      />
    </div>
  );
}

export default App;
