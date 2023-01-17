import Courses from "./components/Courses";


function App() {
  const Coursess=[{
    image1:"angular.jpg",
    rate:2,
    description:"learn everything",
    price:"50dt"

  },
  {
    image1:"jenkins.jpg",
    rate:4,
    description:"learn everything",
    price:"50dt"

  },
  {
    image1:"docker.jpg",
    rate:4,
    description:"learn everything",
    price:"50dt"

  },
  {
    image1:"react.jpg",
    rate:4,
    description:"learn everything",
    price:"50dt"

  },
  {
    image1:"node.jpg",
    rate:4,
    description:"learn everything",
    price:"50dt"

  },
  {
    image1:"spring.jpg",
    rate:3,
    description:"learn everything",
    price:"50dt"

  },
  {
    image1:"nestjs.jpg",
    rate:3,
    description:"learn everything",
    price:"50dt"

  }

  ]
  return (
    <div className='row col-12 p-2' >
    {
      Coursess.map(e=><Courses courseDetails={e} />)
    }

    </div>
  );
}

export default App;
