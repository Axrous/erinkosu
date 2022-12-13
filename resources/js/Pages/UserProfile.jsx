import CustomersLayout from "@/Layouts/CustomersLayout";
import deku from "../../../public/photos/deku1.jpg";

export default function UserProfile() {
  return (
    <CustomersLayout>
      <div className="container mx-auto border">
        <div className="flex">
          <div className="w-6/12 border">
            <div className="w-6/12 mx-auto border ">
              <div className="w-full">
                <img src={deku} alt="" srcset="" className="object-fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomersLayout>
  );
}
