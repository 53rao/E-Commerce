type ButtonProps = {
  text: string;
  buttonColor?: string;
  onClick?: () => void;
};

function Button(props: ButtonProps) {
  
    return(<>
                <button onClick={props.onClick}  className={`btn  w-full text-center flex justify-center p-4 my-3 text-2xl text-amber-50 ${props.buttonColor}`}> {props.text}</button>

    </>
    );
}
export default Button