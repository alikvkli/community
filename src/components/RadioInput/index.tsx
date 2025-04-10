
export default function RadioInput({ value, id, selected, setSelected }: { value: string, id: string, selected: boolean, setSelected: (value: boolean) => void }) {
    return (
        <label
            htmlFor={id}
            className="flex items-center gap-2 cursor-pointer">
            <div className="relative w-5 h-5">
                <input
                    id={id}
                    type="radio"
                    name="customRadio"
                    value={value}
                    checked={selected}
                    onChange={() => setSelected(!selected)}
                    className="appearance-none w-full h-full  border-2 border-[#7E7E7E] rounded-full checked:bg-white checked:border-[#00697C] transition-colors duration-200"
                />
                {/* Inner circle */}
                {selected && (
                    <div className="absolute top-[4px] left-[4px] w-3 h-3 bg-[#00697C] rounded-full" />
                )}
            </div>
            <span className="text-[#0D0D0D] text-[16px]">
                {value}
            </span>
        </label>
    );
}