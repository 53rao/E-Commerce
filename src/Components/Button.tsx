type ButtonProps = {
  text: string;
  buttonColor?: string;
};

function Button(props: ButtonProps) {
    return(<>
                <button className={`btn  w-full text-center flex justify-center p-4 my-3 text-2xl text-amber-50 ${props.buttonColor}`}> {props.text}</button>

    </>
    );
}
export default Button