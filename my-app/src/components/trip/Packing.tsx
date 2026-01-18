import { FormGroup, FormControlLabel, Checkbox, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import { MockItemChecklist, type ItemType } from "../../mockData/mockItemChecklist";

export function Packing() {
    const [items, setItems] = useState<Array<ItemType>>([]);
    const [filter, setFilter] = useState<boolean>(false);


    useEffect(() => {
        setItems(MockItemChecklist);
    }, []);

    const handleToggle = (index: number) => {
        setItems(prevItems =>
            prevItems.map((item, i) =>
                i === index ? { ...item, checked: !item.checked } : item
            )
        );
    };

    return (
        <div>
            <FormGroup>
                <h5 className="text-lg mb-[8px]">All Items</h5>
                <FormControlLabel control={<Switch checked={filter} onChange={(e) => setFilter(e.target.checked)} />} label="Remaining" />

                <div className="overflow-y-scroll max-h-80 flex flex-col">
                    {
                        items.map((item, index) =>
                            !filter || (filter && !item.checked) ? (
                                <div className={!filter || (filter && !item.checked) ? "block" : "hidden"}>
                                    <FormControlLabel key={item.id} control={<Checkbox disabled={filter} checked={item.checked} onChange={() => handleToggle(index)} />} label={item.name} />
                                </div>
                            ) : <></>
                        )
                    }
                </div>
            </FormGroup>
        </div>
    )
}