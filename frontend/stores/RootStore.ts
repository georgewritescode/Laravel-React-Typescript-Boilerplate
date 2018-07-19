import { observable, computed, action } from 'mobx'

class RootStore {
    @observable user = {
		id: "1",
        name: "George"
	};
}
export default new RootStore();