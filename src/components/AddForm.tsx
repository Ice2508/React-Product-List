



interface AddFormProps {
  inputValue: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitProduct: (e: React.FormEvent<HTMLFormElement>) => void;
}


export default function AddForm({ onSubmitProduct, inputValue, onChangeInput }: AddFormProps) {
	return (
		<form className="add-form" onSubmit={onSubmitProduct}>
          <input className="add-input" type="text" placeholder="введите название товара" value={inputValue} onChange={onChangeInput}/>
          <button className="add-btn">добавить</button>
        </form>
    );
}