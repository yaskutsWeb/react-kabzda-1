import React from "react";
import {create, act} from 'react-test-renderer';
import ProfileStatusFunctional from "./ProfileStatusFunctional";

describe('ProfileStatusFunctional component', () => {
	test('status from props should be in the state', () => {
		let component;
		act(() => {
			component = create(
				<ProfileStatusFunctional status='fakeStatus'/>
			);
		});
		const testInstance = component.root;
		const testStatus = testInstance.findByType('p')
		expect(testStatus.children).toEqual(['fakeStatus']);
	});
	test('openEditMode should be opened', () => {
		let component;
		act(() => {
			component = create(
				<ProfileStatusFunctional status='fakeStatus'/>
			);
		});
		const testInstance = component.root;
		const testStatus = testInstance.findByType('p');
		act(() => {
			testStatus.props.onClick();
		});
		const input = testInstance.findByType('input');
		expect(input.props.value).toEqual('fakeStatus');
	});
	test('callbackShouldBeCalled', () => {
		const fakeCallBack = jest.fn();
		let component;
		act(() => {
			component = create(
				<ProfileStatusFunctional status='fakeStatus' updateUserStatus={fakeCallBack}/>
			);
		});
		const testInstance = component.root;
		const testStatus = testInstance.findByType('p');
		act(() => {
			testStatus.props.onClick();
		});
		const input = testInstance.findByType('input');
		act(() => {
			input.props.onBlur();
		});
		expect(fakeCallBack).toBeCalledTimes(1);
	});
});