const Box = props => {
  //  Write your code here.
  const { container, text } = props;
  return <div className={`box ${container}`}>{text}</div>
}

const element = (
  //  Write your code here.
    <div className="bg">
        <h1 className="heading">Boxes</h1>
        <div className="box-container">
            <Box container="box-1" text="Small" />
            <Box container="box-2" text="Medium" />
            <Box container="box-3" text="Large" />
        </div>
    </div>
)

ReactDOM.render(element, document.getElementById("root"));