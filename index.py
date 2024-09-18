import json, csv, uuid


class Vessel:
    def write(self, collection, content):
        json_content = json.dumps(content, indent=4)
        with open(f"./{collection}.json", "w") as file:
            file.write(json_content)
            print(f"Your collection created with {collection} as the name")

    def read(self, collection):
        with open(f"./{collection}.json", "r") as file:
            content = file.read()
            if content == "":
                return []
            else:
                return json.loads(content)

    def clear(self, collection):
        with open(f"./{collection}.json", "w") as file:
            file.write("")
            print("collection cleared successfully")

    def export_csv(self, collection):
        with open(f"./{collection}.json", "r") as file:
            data = json.loads(file.read())
            with open("output.csv", "w", newline="") as files:
                headers = data[0].keys()
                writer = csv.DictWriter(files, fieldnames=headers)
                writer.writeheader()
                for item in data:
                    writer.writerow(item)


class brain:
    def write(self, collection, data):
        value = Vessel().read(collection)
        if value.__le__ == 0:
            Vessel().write(collection, data)
        else:
            for item in data:
                item["id"] = str(uuid.uuid1())
                value.append(item)
            Vessel().write(collection, value)

    def read(self, collection):
        data = Vessel().read(collection)
        return {"records": data, "length": len(data)}

    def get_by_properties(self, collection, key, values):
        value = Vessel().read(collection)
        if value.__le__ == 0:
            print("database is empty")
        else:
            for item in value:
                if item[key] == values:
                    return {"records": json.dumps(item)}
            return {"records": {}}

    def get_by_id(self, collection, values):
        value = Vessel().read(collection)
        if value.__le__ == 0:
            print("database is empty")
        else:
            for item in value:
                if item["id"] == values:
                    return {"records": json.dumps(item)}
            return {"records": {}}

    def edit(self, collection, identifier, identifierValue, key, values):
        value = Vessel().read(collection)
        if value.__le__ == 0:
            print("database is empty")
        else:
            target_index = next(
                (
                    index
                    for index, item in enumerate(value)
                    if item.get(identifier) == identifierValue
                ),
                -1,
            )
            if target_index != -1:
                value[target_index][key] = values
                Vessel().write(collection, value)

    def truncate(self, collection):
        Vessel().clear(collection)

    def delete(self, collection, id):
        value = Vessel().read(collection)
        filtered_data = [item for item in value if item.get("id") != id]
        Vessel().write(collection, filtered_data)

    def count(self, collection):
        value = Vessel().read(collection)
        return {"length": len(value)}
