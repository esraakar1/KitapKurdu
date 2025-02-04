

const Info = ({title,value}) => {
  return (
   <p className="fs-5">
    <span className="badge bg-danger me-3">{title}</span>
    <span>{value}</span>
   </p>
  );
};

export default Info;