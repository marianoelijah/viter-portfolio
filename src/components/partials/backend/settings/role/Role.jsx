import { setIsAdd } from "@/components/store/storeAction";
import { Plus } from "lucide-react";
import React from "react";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import ModalError from "../../partials/modals/ModalError";
import SideNavigation from "../../partials/SideNavigation";
import ToastSuccess from "../../partials/ToastSuccess";
import ModalAddRole from "./ModalAddRole";
import RoleList from "./RoleList";
import { StoreContext } from "@/components/store/storeContext";

const Role = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="role" />
          <main>
            <Header title="Role" subtitle="Welcome to Jollibee!" />
            <div className="p-5">
              <div className="flex justify-between items-end">
                <div></div>
                <button
                  className="btn btn-add"
                  type="button"
                  onClick={handleAdd}
                >
                  <Plus size={16} />
                  Add New
                </button>
              </div>
              <RoleList setItemEdit={setItemEdit} />
            </div>
            <Footer />
          </main>
        </div>
      </section>

      {store.success && <ToastSuccess />}
      {store.error && <ModalError />}
      {/* {store.isAdd && <ModalError />} */}
      {store.isAdd && <ModalAddRole itemEdit={itemEdit} />}
    </>
  );
};

export default Role;